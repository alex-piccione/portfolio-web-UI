import axios from "axios"
import { Currency } from "../components/entities"

export const getCurrencies = async () => {  
  const response = await axios.get(`/api/currencies`)
  console.log("API getCurrencies", response)
  return response.data as Currency[]
}

export const saveCurrency = async (currency: Currency) => {
  const response = await axios.post(`/api/currencies`, currency)
  console.log("API saveCurrency", response)
  return response.data as Currency
}