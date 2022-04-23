import axios from "axios";
import React from "react"
import { Balance } from "../Entities"

export interface FundUpdate {
  date: Date,
  currencyCode: string,
  quantity: number,
  companyIds: string[]
}

const baseCurrency = "EUR"

/* axios usage example: https://stackoverflow.com/questions/52766608/how-to-retrieve-data-from-reactjs-and-api */

const getBalance = async ():Promise<Balance> => {
  
  return await axios.get(`/api/balance?base-currency=${baseCurrency}`)
    .then(response => response.data)  
}

const updateFund = async (update:FundUpdate) => {
  return await axios.post(`/api/balance/update-fund`, update)
}

const BalanceContainer = React.createContext({
  //balance: Balance
  updateFund: (update:FundUpdate) => {} 
})

// not used
//export default BalanceContainer
export {}