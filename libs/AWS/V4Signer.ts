/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
 
import utils from "./utils"
import CryptoJS from "crypto-js"
import axios from "axios";

export interface SignerV4Config {
  accessKey: string,
  secretKey: string,
  serviceName: string,
  //sessionToken: string,
  apiGatewayId: string,
  apiStage: string,
  region: string
}

const defaultContentType = "application/json"
const defaultAcceptType = "application/json"

export default function newV4Signer(config:SignerV4Config) {

  utils.assertDefined(config, "accessKey")

  if(config.accessKey === undefined || config.secretKey === undefined) 
    throw "Access Key or Secret key is missing"  

  var AWS_SHA_256 = 'AWS4-HMAC-SHA256'
  var AWS4_REQUEST = 'aws4_request'
  var AWS4 = 'AWS4';
  var X_AMZ_DATE = 'x-amz-date';
  var X_AMZ_SECURITY_TOKEN = 'x-amz-security-token';
  var HOST = 'host';
  var AUTHORIZATION = 'Authorization';

  //var endpoint = `https://${config.apiGatewayId}.execute-api.${config.region}.amazonaws.com/${config.apiStage}`
  var endpoint = `https://${config.apiGatewayId}.execute-api.${config.region}.amazonaws.com`

  const hash = (value:string) => CryptoJS.SHA256(value) 
  const hexEncode = (value) => value.toString(CryptoJS.enc.Hex)
  const hmac = (secret, value) => CryptoJS.HmacSHA256(value, secret /*, {asBytes: true}*/)

  function buildCanonicalRequest(method, path, queryParams, headers, payload) {
    return method + '\n' +
      buildCanonicalUri(path) + '\n' +
      buildCanonicalQueryString(queryParams) + '\n' +
      buildCanonicalHeaders(headers) + '\n' +
      buildCanonicalSignedHeaders(headers) + '\n' +
      hexEncode(hash(payload));
  }

  const hashCanonicalRequest = (request) => hexEncode(hash(request))
  const buildCanonicalUri = (uri:string) => encodeURI(uri)

  function buildCanonicalQueryString(queryParams) {
    if (Object.keys(queryParams).length < 1) {
      return '';
    }

    var sortedQueryParams = [];
    for (var property in queryParams) {
      if (queryParams.hasOwnProperty(property)) {
        sortedQueryParams.push(property);
      }
    }
    sortedQueryParams.sort();

    var canonicalQueryString = '';
    for (var i = 0; i < sortedQueryParams.length; i++) {
      canonicalQueryString += sortedQueryParams[i] + '=' + fixedEncodeURIComponent(queryParams[sortedQueryParams[i]]) + '&';
    }    
    return canonicalQueryString.substr(0, canonicalQueryString.length - 1);
  }

  function fixedEncodeURIComponent (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  function buildCanonicalHeaders(headers) {
    var canonicalHeaders = '';
    var sortedKeys = [];
    for (var property in headers) {
      if (headers.hasOwnProperty(property)) {
        sortedKeys.push(property);
      }
    }
    sortedKeys.sort();

    for (var i = 0; i < sortedKeys.length; i++) {
      canonicalHeaders += sortedKeys[i].toLowerCase() + ':' + headers[sortedKeys[i]] + '\n';
    }
    return canonicalHeaders;
  }

  function buildCanonicalSignedHeaders(headers) {
    var sortedKeys = [];
    for (var property in headers) {
      if (headers.hasOwnProperty(property)) {
        sortedKeys.push(property.toLowerCase());
      }
    }
    sortedKeys.sort();

    return sortedKeys.join(';');
  }

  function buildStringToSign(datetime, credentialScope, hashedCanonicalRequest) {
    return AWS_SHA_256 + '\n' +
      datetime + '\n' +
      credentialScope + '\n' +
      hashedCanonicalRequest;
  }

    function buildCredentialScope(datetime, region, service) {
      return datetime.substr(0, 8) + '/' + region + '/' + service + '/' + AWS4_REQUEST
    }

    function calculateSigningKey(secretKey, datetime, region, service) {
        return hmac(hmac(hmac(hmac(AWS4 + secretKey, datetime.substr(0, 8)), region), service), AWS4_REQUEST);
    }

    function calculateSignature(key, stringToSign) {
        return hexEncode(hmac(key, stringToSign));
    }

    function buildAuthorizationHeader(accessKey, credentialScope, headers, signature) {
        return AWS_SHA_256 + ' Credential=' + accessKey + '/' + credentialScope + ', SignedHeaders=' + buildCanonicalSignedHeaders(headers) + ', Signature=' + signature;
    }

    var awsSigV4Client = {    
      accessKey: utils.assertDefined(config.accessKey, 'accessKey'),
      secretKey: utils.assertDefined(config.secretKey, 'secretKey'),
      //sessionToken: config.sessionToken,
      serviceName: utils.assertDefined(config.serviceName, 'serviceName'),
      region: utils.assertDefined(config.region, 'region'),

      makeRequest: function (request) {
        var verb = utils.assertDefined(request.verb, 'verb');
        var path = `${config.apiStage}/${request.path}`;
        var queryParams = utils.copy(request.queryParams);
        if (queryParams === undefined) {
            queryParams = {};
        }
        var headers = utils.copy(request.headers);
        if (headers === undefined) {
            headers = {};
        }

        //If the user has not specified an override for Content type the use default
        if(headers['Content-Type'] === undefined) headers['Content-Type'] = defaultContentType;

        //If the user has not specified an override for Accept type the use default
        if(headers['Accept'] === undefined) headers['Accept'] = defaultAcceptType

        var body = utils.copy(request.body);
        if (body === undefined || verb === 'GET') { // override request body and set to empty when signing GET requests
            body = '';
        }  else {
            body = JSON.stringify(body);
        }

        //If there is no body remove the content-type header so it is not included in SigV4 calculation
        if(body === '' || body === undefined || body === null) {
            delete headers['Content-Type'];
        }

        var datetime = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z').replace(/[:\-]|\.\d{3}/g, '');
        headers[X_AMZ_DATE] = datetime;
        var parser = document.createElement('a');
        parser.href = endpoint // 
        headers[HOST] = parser.hostname;

        var canonicalRequest = buildCanonicalRequest(verb, path, queryParams, headers, body);
        var hashedCanonicalRequest = hashCanonicalRequest(canonicalRequest);
        var credentialScope = buildCredentialScope(datetime, awsSigV4Client.region, awsSigV4Client.serviceName);
        var stringToSign = buildStringToSign(datetime, credentialScope, hashedCanonicalRequest);
        var signingKey = calculateSigningKey(awsSigV4Client.secretKey, datetime, awsSigV4Client.region, awsSigV4Client.serviceName);
        var signature = calculateSignature(signingKey, stringToSign);
        headers[AUTHORIZATION] = buildAuthorizationHeader(awsSigV4Client.accessKey, credentialScope, headers, signature);
        /*if(awsSigV4Client.sessionToken !== undefined && awsSigV4Client.sessionToken !== '') {
            headers[X_AMZ_SECURITY_TOKEN] = awsSigV4Client.sessionToken;
        }*/
        delete headers[HOST];

        var url = endpoint + path;
        var queryString = buildCanonicalQueryString(queryParams);
        if (queryString != '') {
            url += '?' + queryString;
        }

        //Need to re-attach Content-Type if it is not specified at this point
        if(headers['Content-Type'] === undefined) headers['Content-Type'] = defaultContentType

        var signedRequest = {
          method: verb,
          url: url,
          headers: headers,
          data: body
        };
        return axios(signedRequest);
      }
    };

    return awsSigV4Client;
};
