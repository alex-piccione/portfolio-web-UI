import axios from "axios"
import { Balance, FundUpdate } from "../components/entities"
import {get, post} from "./helper"
import getErrorString from "../pages/api/helper"

/*
export const getBalance = async (baseCurrency:string) => 
  await axios.get(`/api/balance?base-currency=${baseCurrency}`)
    .then(response => apiSuccess(response.data as Balance))
    .catch(error => apiFailure<Balance>(error))

export const getBalance__ = async (baseCurrency:string) => 
  await axios.get(`/api/balance?base-currency=${baseCurrency}`)
    .then(response => response.data as Balance)
    .catch(error => getErrorString.getErrorString(error))
    */

/*
const getBalance = async (baseCurrency:string) => 
  await axios.get(`/api/balance?base-currency=${baseCurrency}`)
    .then(response => apiSuccess(response.data as Balance))
    .catch(error => apiFailure<Balance>(error))

const updateBalance = async (update:FundUpdate, setError: (s:string) => void) => {   
  await axios.post(`/api/balance/update-fund`, update)
    .then(response => {})
    .catch(error => setError(getErrorString.getErrorString(error))
  );
}
*/

const api = {
  getBalance: (baseCurrency:string) => get<Balance>(`/api/balance?base-currency=${baseCurrency}`),  
  updateBalance: (fundUpdate:FundUpdate) => post<FundUpdate>("/api/balance/update-fund", fundUpdate)
}

export default api