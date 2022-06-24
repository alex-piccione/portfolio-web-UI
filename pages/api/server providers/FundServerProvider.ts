import { Company, CompanyFundsAtDate, FundUpdate } from "../../../Entities"
import BaseServerProvider from "./BaseServerProvider"
import CompanyProvider from "./CompanyServerProvider"

const companyProvider = new CompanyProvider()

class FundServerProvider extends BaseServerProvider {  

  getFundRecords = async (currency:string, from:Date) => {
    const companies = await companyProvider.getCompanies()
    return await super.get(`fund?currency=${currency}&from=${from.toISOString()}`, (data) => parser.parseCurrencyFundByDate(data as unknown as any[], companies))  
  }

  async updateFund(update:FundUpdate) {

    const payload = {
      "date": update.date, //.toISOString(),
      "currencyCode": update.currencyCode,
      "quantity": update.quantity,
      "CompanyId": update.companyId
    }

    return super.put(`balance/update`, payload, (data) => parser.parseResponse(data))
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
          isInherited: cf.Id == null,
          recordId: cf.Id,
          company: companies.filter(c => c.id == cf.CompanyId)[0] || companyProvider.getUnknownCompany(cf.CompanyId),
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
  parseCurrencyFundByDate: (data:any[], companies: Company[]):CompanyFundsAtDate[] => data.map( item => parseCompanyFund(item, companies)),
  parseResponse: (data:any) => {
    return {success: true}
  }
}

export default FundServerProvider