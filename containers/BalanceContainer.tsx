import axios from "axios";
import React, { Children } from "react"
import { Balance } from "../components/entities"

export interface FundUpdate {
  date: Date,
  currencyCode: string,
  quantity: number,
  companyIds: string[]
}

const baseCurrency = "EUR"

const getBalance = async ():Promise<Balance> => {
  /* axios usage example: https://stackoverflow.com/questions/52766608/how-to-retrieve-data-from-reactjs-and-api */
  return await axios.get(`/api/balance?base-currency=${baseCurrency}`)
    .then(response => response.data)  
}

const updateFund = async (update:FundUpdate) => {
  /* axios usage example: https://stackoverflow.com/questions/52766608/how-to-retrieve-data-from-reactjs-and-api */
  return await axios.post(`/api/balance/update-fund`, update)
}

const container = React.createContext({
  //balance: Balance
  updateFund: (update:FundUpdate) => {} 
})

/*
const container = (props) => {

  const name = "aaa"

  return <>
  {Children({name})}
  </>
} */


export default container