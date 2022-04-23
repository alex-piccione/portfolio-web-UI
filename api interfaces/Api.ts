import axios from "axios"
import { Currency, Company, Balance, FundUpdate, CompanyFundsAtDate } from "../Entities"
import apiHelper from "../pages/api/api helper"

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
    getOfCurrency: (currency:string, from:Date ) => get<CompanyFundsAtDate[]>(`/api/fund?currency=${currency}&from=${from.toISOString()}`),
  }
}

interface ApiResult<T> {
  isSuccess: boolean;
  data: T;
  error: string;
}

const apiSuccess = <T>(data:T) => { return {isSuccess: true, data} as ApiResult<T> }
const apiFailure = <T>(error:any) => { return {isSuccess: false, error:apiHelper.getErrorString(error) } as ApiResult<T> }

const get = <T>(url:string) => axios.get(url)
  .then(response => apiSuccess(response.data as T))
  .catch(error => apiFailure<T>(error))

const post = <T>(url:string, data:T) => axios.post(url, data)
  .then(response => apiSuccess(response.data as T))
  .catch(error => apiFailure<T>(error))

export {get, post, apiSuccess, apiFailure}