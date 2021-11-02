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
import newV4Signer from "./V4Signer"

export const newGatewayClient = function (config) {
  const sigV4Client = newV4Signer(config)

  return {
    makeRequest: function (request, additionalParams:{headers, queryParams}) {

      //Attach the apiKey to the headers request if one was provided
      //if (apiKey) 
      //  request.headers['x-api-key'] = apiKey;

      if (request.body || Object.keys(request.body).length === 0) {
        request.body = undefined;
      }

      // If the user specified any additional headers or query params that may not have been modeled
      // merge them into the appropriate request properties
      request.headers = [...request.headers, additionalParams.headers] // utils.mergeInto(request.headers, additionalParams.headers)
      request.queryParams = [...request.queryParams, additionalParams.queryParams] // utils.mergeInto(request.queryParams, additionalParams.queryParams)

      return sigV4Client.makeRequest(request);
    }
  }
}
