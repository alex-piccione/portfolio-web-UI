import getConfig from "next/config"
import { Company } from "../../../Entities"
import { getConfiguration } from "./configuration"
import axios from "axios"

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const serverConfig = getConfiguration(serverRuntimeConfig)

const host = `${serverConfig.AWS.apiGatewayId}.execute-api.${serverConfig.AWS.region}.amazonaws.com`
const baseUrl = `https://${host}/${serverConfig.AWS.apiStage}`
const headers = {Host: host}

// TODO: an error here (missing configuration)
// is returned as HTML and not properly managed.
// Browser's console shows a HTML that is not readable and hides the problem.
// UI shows an error because it cannot parse the returned HTML as JSON.

const CompanyServerProvider = {  
  getCompanies: async () =>  {
    return axios.get(`${baseUrl}/company`, {headers:headers})
    .then(result =>  parser.parseCompanies(result.data))
    .catch(error => {throw Error(`Failed to call API Gateway. ${error}`)});     
  },
  createCompany: async (company:Company) =>  {
    return axios.post(`${baseUrl}/company`, company, {headers:headers})
    .then(result => company) // parser.parseCompanies(result.data))
    .catch(error => {throw Error(`Failed to call API Gateway. ${error}`)});     
  },
}

const parser = {
  parseCompanies: (data:any) => {
    try {
      const companies = (data as Array<any>).map(item => {
        const types = item.Types.map((t: any) => t) 
        return {id: item.Id, name: item.Name, types: types} as Company
      })
      return companies;
    }
    catch (error) {
      // todo: log with Sentry or similar
      throw Error(`Failed to parse Companies. ${error}`)
    }
  }  
}

export default CompanyServerProvider