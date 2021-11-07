import { Balance, Company } from "../components/entities"
import BaseProvider from "./BaseProvider"
import CompanyProvider from "./companyProvider"

class BalanceProvider extends BaseProvider {  
  async getBalance(baseCurrency:string) {
    const companies = await CompanyProvider.getCompanies();
    return super.get(`balance?base-currency=${baseCurrency}`, (data) => parser.parseBalance_(data, companies)) 
    //return super.get(`balance?base-currency=${baseCurrency}`, parser.parseBalance) 
  }
}

const parser = {
  parseBalance: (data:any):Balance => {
    try {      
      const date = new Date(data.Date)             
      const funds = (data.FundsByCurrency as Array<any>).map(fund => {
        return { currencyCode: fund.CurrencyCode, amount:fund.Quantity, companies: [] }
      })
      return {date:date, fundsByCurrency:funds}
    }
    catch (error) {
      // todo: log with Sentry or similar
      throw Error(`Failed to parse Balance. ${error}`)
    }
  },

  parseBalance_: (data:any, companies:Company[]):Balance => {
    try {      
      const date = new Date(data.Date)
      const getCompanies = (ids:string[]) => ids.map(id => { 
        return {id:id, name:companies.filter(c => c.Id == id)[0]?.Name || "unknown"} 
      })                
      const funds = (data.FundsByCurrency as Array<any>).map(fund => {
        return { currencyCode: fund.CurrencyCode, amount:fund.Quantity, companies: getCompanies(fund.CompaniesIds) }
      })
      return {date:date, fundsByCurrency:funds}
    }
    catch (error) {
      // todo: log with Sentry or similar
      throw Error(`Failed to parse Balance. ${error}`)
    }
  }
}

export default BalanceProvider