import getConfig from "next/config"
import { Company } from "../components/entities"
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
var apiGatewayClient = createGatewayClient(signerConfig);

const CompanyProvider = {
  
  getCompanies: async () =>  {
    return axios.get(`${baseUrl}/company/all`, {headers:headers})
    .then(result =>  parser.parseCompanies(result.data))
    .catch(error => {throw Error(`Failed to call API Gateway. ${error}`)});     
  },

}

const parser = {

  parseCompanies: (data) => {
    try{
      const companies = (data as Array<any>).map(item => {
        const types = item.Types.map(t => t) 
        return {Id: item.Id, Name: item.Name, Types: types} as Company
      })
      return companies;
    }
    catch (error) {
      // todo: log with Sentry or similar
      throw Error(`Failed to parse Companies. ${error}`)
    }
  }  
}

export default CompanyProvider