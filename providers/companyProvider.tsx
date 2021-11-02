import getConfig from "next/config"
import { Company } from "../components/entities"
import { LambdaClient, ServiceException } from "@aws-sdk/client-lambda"
import { getConfiguration } from "./configuration"

import {newGatewayClient } from "../libs/AWS/apiGatewayClient"
import { SignerV4Config } from "../libs/AWS/V4Signer"

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const serverConfig = getConfiguration(serverRuntimeConfig)

console.log(`serverRuntimeConfig.baseLanguage: ${serverRuntimeConfig.baseLanguage}`)
console.log(`publicRuntimeConfig.baseLanguage: ${publicRuntimeConfig.baseLanguage}`)

//var invokeUrl = `https://ikvqpq0ut9.execute-api.eu-central-1.amazonaws.com/live`
//var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
//var pathComponent = invokeUrl.substring(endpoint.length);

const apiKey = ""

var signerConfig:SignerV4Config = {
  accessKey: serverConfig.AWS.accessKey,
  secretKey: serverConfig.AWS.secretKey,
  //sessionToken: "",
  serviceName: 'execute-api',
  region: serverConfig.AWS.region, 
  apiGatewayId: serverConfig.AWS.apiGatewayId,
  apiStage: serverConfig.AWS.apiStage,
};

// TODO: an error here (missing configuration)
// is returned as HTML and not properly managed.
// Browser's console shows a HTML that is not readable and hides the problem.
// UI shows an error because it cannot parse the returned HTML as JSON.
var apiGatewayClient = newGatewayClient(signerConfig);

const CompanyProvider = {
 
  getCompanies: async () =>  {

    //const client = new LambdaClient({ region: "REGION" });
    //const command = new AddLayerVersionPermissionCommand(params);

    var request = {
      verb: "GET",
      path: "/company/all",  //uritemplate("/live/company").expand(utils.parseParametersToObject(params, [])),
      headers: {"ContentType": "application/json"}, // utils.parseParametersToObject(params, []),
      queryParams: [], // utils.parseParametersToObject(params, []),
      body: ""
    };

    return apiGatewayClient.makeRequest(request).then(result => {
      
      return parser.parseCompanies(result.data)     

    }).catch(error => {throw Error(`Failed to call API Gateway. ${error}`)});      

/*
    apigClient.companyGet = function (params, body, additionalParams) {
      if(additionalParams === undefined) { additionalParams = {}; }
      
      apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
      
      var companyGetRequest = {
          verb: 'get'.toUpperCase(),
          path: pathComponent + uritemplate('/company').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
          headers: apiGateway.core.utils.parseParametersToObject(params, []),
          queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
          body: body
      };
      
      
      return apiGatewayClient.makeRequest(companyGetRequest, authType, additionalParams, config.apiKey);
  };


      apigClient.companyAllGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var companyAllGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/company/all').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(companyAllGetRequest, authType, additionalParams, config.apiKey);
    };
  */

    //const response = await fetch(`http://${serverRuntimeConfig.baseLanguage}`)
    //const a = response.status.toString()
    //response.status
    //const client = new LambdaClient({ region: "REGION" });
    //onst response = await fetch()

    //console.log(`aaa: ${serverRuntimeConfig.mySecret}`) // it works only if called server-side

    let companies:Company[] = []
    companies.push({Id:"1", Name: "Fineco", Types: ["Bank 4"]})
    return companies
  }
}

const parser = {
  parseCompanies: (data) => {
    var companies:Company[] = [
      {Id:"1", Name:"Company A", Types:["Bank"]},
      {Id:"2", Name:"Company B", Types:["Exchange"]},
    ]
    return {data: companies};
  }  
}

export default CompanyProvider