import { Balance, Company, Fund, FundUpdate } from "../../../components/entities"
import BaseServerProvider from "./BaseServerProvider"
import CompanyProvider from "./CompanyServerProvider";

class BalanceServerProvider extends BaseServerProvider {  
  async getBalance(baseCurrency:string) {
    const companies = await CompanyProvider.getCompanies();
    return super.get(`balance?base-currency=${baseCurrency}`, (data) => parser.parseBalance(data, companies)) 
  }

  async updateFund(update:FundUpdate) {

    const payload = {
      "date": update.date, //.toISOString(),
      "currencyCode": update.currencyCode,
      "quantity": update.quantity,
      "CompanyId": update.companyId
    }

    return super.put(`balance/update`, payload, (data) => parser.parseResponse(data))
    /* {
    "Date": "2020-01-01T00:00:00",
    "CurrencyCode": "DOT",
    "Quantity": 700,
    "CompanyId": "132aa1fa-85d9-45e4-ade7-45203022d01b"
    } */
  }
}


const parser = {
  parseBalance: (data:any, companies:Company[]):Balance => {
    try {      
      const date = new Date(data.Date)
      const getCompanies = (ids:string[]) => ids.map(id => { 
        return {id:id, name:companies.filter(c => c.id == id)[0]?.name || "unknown"} 
      })                
      const funds = (data.FundsByCurrency as Array<any>).map(fund => {
        return { 
          currencyCode: fund.CurrencyCode, 
          quantity: fund.Quantity, 
          companies: getCompanies(fund.CompaniesIds) }
      })
      return {date:date, fundsByCurrency:funds}
    }
    catch (error) {
      // todo: log with Sentry or similar
      throw Error(`Failed to parse Balance. ${error}`)
    }
  },
  parseResponse: (data:any) => {
    return {success: true}
  }
}

export default BalanceServerProvider