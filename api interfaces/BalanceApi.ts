import { Balance, FundUpdate } from "../components/entities"
import {get, post} from "./helper"

const api = {
  getBalance: (baseCurrency:string) => get<Balance>(`/api/balance?base-currency=${baseCurrency}`),  
  updateBalance: (fundUpdate:FundUpdate) => post<FundUpdate>("/api/balance/update-fund", fundUpdate)
}

export default api