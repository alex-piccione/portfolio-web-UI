import { Company, CompanyFundsAtDate } from "../../../Entities"
import BaseServerProvider from "./BaseServerProvider"
import CompanyProvider from "./CompanyServerProvider"

class FundServerProvider extends BaseServerProvider {  
  getFundRecords = async (currency:string, from:Date) => {
    const companies = await CompanyProvider.getCompanies()
    const date = from.toISOString()
    return await super.get(`fund?currency=${currency}&from=${from.toISOString()}`, (data) => parser.parseCurrencyFundByDate(data as unknown as any[], companies))  
  }
}

/*const state = {
  const companies = await CompanyProvider.getCompanies();
}*/

const parseCompanyFund = (data:any, companies: Company[]):CompanyFundsAtDate => {
  /* 
  "Date": "2020-01-16T00:00:00Z",
        "CompanyFunds": [
            {
                "Id": "a8aad5ae-8387-4cb4-b407-018c47179aeb",
                "CompanyId": "cfb24ea6-2c29-4dab-a294-1e430b9d358f",
                "Quantity": 130,
                "LastUpdateDate": "2000-01-01T00:00:00"
            }
        ],
        "TotalQuantity": 0
   */
  try {
    return {
      date: data.Date,
      companies: data.CompanyFunds.map((cf:any) => {
        return {
          recordId: cf.Id,
          company: companies.filter(c => c.id == cf.CompanyId)[0] || CompanyProvider.getUnknownCompany(cf.CompanyId),
          quantity: cf.Quantity,
          lastChangeDate: cf.LastUpdateDate,
          note: ""
        }
      }),
      totalQuantity: data.TotalQuantity
    }
  }
  catch (error) {
    // TODO: log with Sentry or similar
    throw Error(`Failed to parse Fund. ${error}`)
  }
}


const parser = {
  parseCurrencyFundByDate: (data:any[], companies: Company[]):CompanyFundsAtDate[] => data.map( item => parseCompanyFund(item, companies))   
}

export default FundServerProvider