import axios from "axios"
import { Currency } from "../components/entities"

export const getCurrencies = async () => {
  const response = await axios.get(`/api/currencies`)
  console.log("axios response", response)
  return response.data as Currency[]
      //setError(error?.response?.data?.error || `${error}`)
      //alert(error?.response?.data?.error || `${error}`)
}