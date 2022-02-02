import axios from "axios"
import { Currency } from "../components/entities"

export const getCurrencies = async () => {  
  const response = await axios.get(`/api/currencies`)
  console.log("API getCurrencies", response)
  return response.data as Currency[]
}