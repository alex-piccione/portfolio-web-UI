import getConfig from "next/config"
import { getConfiguration } from "./configuration"
import axios, { AxiosResponse } from "axios"

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const serverConfig = getConfiguration(serverRuntimeConfig)

const host = `${serverConfig.AWS.apiGatewayId}.execute-api.${serverConfig.AWS.region}.amazonaws.com`
const baseUrl = `https://${host}/${serverConfig.AWS.apiStage}`
const headers = {Host: host}


abstract class BaseProvider {

  get<T>(path:string, parse:(response:AxiosResponse) => T) { 
    return axios.get(`${baseUrl}/${path}`, {headers:headers})
      .then(response => 
        //response.status
        parse(response.data)
        ) 
      .catch(error => {throw Error(`Failed to call API Gateway. ${error}`)}) 
  }

  put<T,R>(path:string, data:T, parse:(response:AxiosResponse) => R) { 
    return axios.put(`${baseUrl}/${path}`, {headers:headers, data:data,})
      .then(response => 
        //response.status
        parse(response.data)
        ) 
      .catch(error => {throw Error(`Failed to call API Gateway. ${error}`)}) 
  }
}

export default BaseProvider
