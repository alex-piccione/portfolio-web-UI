import getConfig from "next/config"
import { getConfiguration } from "./configuration"
import axios, { AxiosResponse } from "axios"

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const serverConfig = getConfiguration(serverRuntimeConfig)

const host = `${serverConfig.AWS.apiGatewayId}.execute-api.${serverConfig.AWS.region}.amazonaws.com`
const baseUrl = `https://${host}/${serverConfig.AWS.apiStage}`
const headers = {Host: host} // what is this for???


abstract class BaseServerProvider {

  get<T>(path:string, parse:(response:AxiosResponse) => T) { 
    return axios.get(`${baseUrl}/${path}`, {headers:headers})
      .then(response => 
        //response.status
        parse(response.data)
        ) 
      .catch(error => {throw Error(`Failed to call API Gateway. ${error}`)}) 
  }

  put<T,R>(path:string, data:T, parse:(response:AxiosResponse) => R) { 
    return axios.put(`${baseUrl}/${path}`, data, {headers:headers})
      .then(response => 
        //response.status
        parse(response.data)
        ) 
      .catch(error => {throw Error(`Failed to call API Gateway. ${error}`)}) 
  }
}

export default BaseServerProvider


/*
const ProviderBase = {

  getCompanies: () => {

      //const client = new LambdaClient({ region: "REGION" });

      let companies:Company[] = []
      companies.push({Id:"", Name: "Fineco", Types: ["Bank"]})
      return companies
  }

  def post(self, path, data):
      try:
          response = callApi("POST", path, data, None)
          if int(response.status_code/100) == 2: return response.text
          else: raise Exception(f"Failed to call API. {response.status_code}{response.text}")
      except Exception as e:
          raise Exception(f"Failed to call API. {e}")

  def get_(self, path, data, queryString):
      try:
          response = callApi("GET", path, None, queryString)
          if int(response.status_code/100) == 2: return response.text
          else: raise Exception(f"Failed to call API. {response.status_code}{response.text}")
      except Exception as e:
          raise Exception(f"Failed to call API. {e}")

  def get(self, path, **kwargs):

      data = kwargs.get("data", None)
      queryString = kwargs.get("queryString", None)

      try:
          response = callApi("GET", path, data, queryString)
          if int(response.status_code/100) == 2: return response.text
          else: raise Exception(f"Failed to call API. ({response.status_code}) {response.text}")
      except Exception as e:
          raise Exception(f"Failed to call API. {e}")
*/