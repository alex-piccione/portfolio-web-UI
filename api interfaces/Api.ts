import { Currency, Company, Balance, FundUpdate } from "../Entities"
import { get, post } from "./helper"

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
}