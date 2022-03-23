import getConfig from "next/config"
import { getConfiguration } from "./configuration"
import axios, { AxiosResponse } from "axios"
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const serverConfig = getConfiguration(serverRuntimeConfig)

const host = `${serverConfig.AWS.apiGatewayId}.execute-api.${serverConfig.AWS.region}.amazonaws.com`
const baseUrl = `https://${host}/${serverConfig.AWS.apiStage}`
const headers = {Host: host} // what is this for???

const isSuccess = (status:number) => Math.floor(status / 100) === 2

abstract class BaseServerProvider {

  get<R>(path:string, parse:(response:AxiosResponse) => R) { 
    return axios.get(`${baseUrl}/${path}`, {headers:headers})
      .then(response => {
        if (isSuccess(response.status)) return parse(response.data)        
        else throw Error(`API Gateway returned error. ${response.status} ${response.statusText}`)
      }) 
      .catch(error => {throw Error(getError(error))})
  }

  put<T,R>(path:string, data:T, parse:(response:AxiosResponse) => R) { 
    return axios.put(`${baseUrl}/${path}`, data, {headers:headers})
      .then(response => {
        if(isSuccess(response.status)) return parse(response.data)
        else throw Error(`API Gateway returned error. ${response.status} ${response.statusText}`)
      }) 
      .catch(error => {throw Error(getError(error))})
  }

  post<T, R>(path:string, data:T, parse?:(response:AxiosResponse) => R) { 
    return axios.post(`${baseUrl}/${path}`, data, {headers:headers})
      .then(response => {
        if (isSuccess(response.status)) return parse ? parse(response.data) : null
        else throw Error(`API Gateway returned error. ${response.status} ${response.statusText}`)
      }) 
      .catch(error => {throw Error(getError(error))})
  }
}

// Get the server response error message
// TODO: log error`${error.response.statusText} - ${error.response.data} `
const getError = (error: any) => 
  error.response ? getData(error.response):
  error.request ? `API Gateway call response not received, please retry. ${error.request}` :
  `Failed to call API Gateway. ${error.message}`

const getData = (response:any) => response.headers["Content-Type"] === "application/json" ? response.data.message : response.data

export default BaseServerProvider