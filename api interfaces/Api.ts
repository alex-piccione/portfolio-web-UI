import { Currency, Company, Balance, FundUpdate, FundRecord } from "../Entities"
import { get, post } from "./helper"

/*
This API is used to call the NextJs server from the client.
It is intended to be used from the client to reach the backend API.
The type passed in the call is the client type, it can have any shape the client likes.
*/
export namespace Api {

  export const Currency = {
    getCurrencies: () => get<Currency[]>(`/api/currencies`),
    saveCurrency: (currency: Currency) => post<Currency>(`/api/currencies`, currency)
  }

  export const Company = {
    getCompanies: () => get<Company[]>(`/api/companies`),
    saveCompany: (company: Company) => post<Company>(`/api/companies`, company),
  }

  export const Balance = {
    getBalance: (baseCurrency:string) => get<Balance>(`/api/balance?base-currency=${baseCurrency}`),  
    updateBalance: (fundUpdate:FundUpdate) => post<FundUpdate>("/api/balance/update-fund", fundUpdate)
  }

  export const Fund = {
    getOfCurrency: (currency:string, limit:number|undefined ) => get<FundRecord[]>(`/api/fund?currency=${currency}&limit=${limit}`),
  }
}