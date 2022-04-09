import { Balance, Company, Fund, FundRecord, FundUpdate } from "../../../Entities"
import BaseServerProvider from "./BaseServerProvider"
import CompanyProvider from "./CompanyServerProvider"

class FundServerProvider extends BaseServerProvider {  
  getFundRecords = async (currency:string, limit:number) =>
    super.get(`fund?currency=${currency}&limit=${limit}`, (data) => parser.parseFunds(data as unknown as any[]))  
}


const parseFund = (data:any):FundRecord => {
  /*
  "Id": "cafc5e58-4937-437b-a1bb-a092c724e448",
  "Date": "2022-03-26T00:00:00Z",
  "CurrencyCode": "EUR",
  "FundCompanyId": "c2",
  "Quantity": 123,
  "LastChangeDate": "2022-03-26T15:01:11.706Z"
  */ 

  try { 
    return {
      id: data.Id,
      currencyCode: data.CurrencyCode,
      companyId: data.FundCompanyId,
      date: new Date(data.Date),
      quantity: data.Quantity,    
      updatedOn: new Date(data.LastChangeDate)
    }
  }
  catch (error) {
    // TODO: log with Sentry or similar
    throw Error(`Failed to parse Fund. ${error}`)
  }
}


const parser = {  
  parseFund: (data:any):FundRecord => parseFund(data),
  parseFunds: (data:any[]):FundRecord[] => data.map( item => parseFund(item))   
}

export default FundServerProvider