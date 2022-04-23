import getConfig from "next/config"
import { Company } from "../../../Entities"
import { getConfiguration } from "./configuration"
import axios from "axios"
import BaseServerProvider from "./BaseServerProvider"

/*
const {serverRuntimeConfig} = getConfig()
const serverConfig = getConfiguration(serverRuntimeConfig)

const host = `${serverConfig.AWS.apiGatewayId}.execute-api.${serverConfig.AWS.region}.amazonaws.com`
const baseUrl = `https://${host}/${serverConfig.AWS.apiStage}`
const headers = {Host: host}
*/

// TODO: an error here (missing configuration)
// is returned as HTML and not properly managed.
// Browser's console shows a HTML that is not readable and hides the problem.
// UI shows an error because it cannot parse the returned HTML as JSON.


// TODO: move this Cache/State logic to the client side (use Redux?)

/*
export interface IState {
  status: "not-loaded" | "loaded" | "loading" | "error"
  companies: Company[]
  loadCounter: number,
  error: string|undefined,
  errorCount: number
}

/*state:IState = {
    status: "not-loaded",
    companies: [],
    loadCounter: 0,
    error: undefined,
    errorCount: 0
  }

  static _instance:CompanyServerProvider

  static instance = () => {
    if (CompanyServerProvider._instance == null) {
      CompanyServerProvider._instance = new CompanyServerProvider()
    }
    return CompanyServerProvider._instance
  }
  const wait = () => new Promise(resolve => setTimeout(resolve, 500))
  
  getCompanies = async ():Promise<Company[]> => {
    
    debugger;

    return this.state.status === "not-loaded" ?
      axios.get(`${baseUrl}/company`, {headers:headers})
        .then(result => {
          const companies = parser.parseCompanies(result.data)
          this.state.companies = companies
          this.state.status = "loaded"
          this.state.error = undefined
          this.state.errorCount = 0
          this.state.loadCounter = this.state.loadCounter + 1
          return this.state.companies
        })
        .catch(error => {
          this.state.status = "error"
          this.state.errorCount = this.state.errorCount + 1
          throw Error(`Failed to call API Gateway. ${error}`)
        }) :
        this.state.status === "loaded" ? 
        Promise.resolve(this.state.companies) 
        :
        this.state.status === "loading" ? wait().then(this.getCompanies) :
      // error, retry
      //wait().then(this.getCompanies) 
      this.state.errorCount > 3 ? Promise.reject(this.state.error) : this.getCompanies()
      //new Promise(resolve => {throw Error(state.error)})
      //[] //throw Error(`Failed to call API Gateway. ${error}`)     
  }*/


class CompanyServerProvider extends BaseServerProvider {  

  getCompanies = async () => await super.get(`company`, (data) => parser.parseCompanies(data))
    
  createCompany = async (company:Company) => await super.post(`company`, company, (data) => parser.parseCompany(data))

  getUnknownCompany = (id:string):Company => {
    return {
      id: id,
      name: "Unknown-" + (id||"").substring(0,8),
      types: [],
    }
  }
}

const parser = {

  parseCompany: (item:any) => {
    try {
      return {id: item.Id, name: item.Name, types: item.Types} as Company
    }
    catch (error) {
      // todo: log with Sentry or similar
      throw Error(`Failed to parse Company. ${error}`)
    }
  },

  parseCompanies: (data:any) => {
    try {
      return (data as Array<any>).map(item => parser.parseCompany(item) )
    }
    catch (error) {
      // todo: log with Sentry or similar
      throw Error(`Failed to parse Companies. ${error}`)
    }
  }  
}

export default CompanyServerProvider