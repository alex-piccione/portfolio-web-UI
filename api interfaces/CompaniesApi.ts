import axios from "axios"
import { Company } from "../components/entities"

export const getCompanies = async () => {
  const response = await axios.get(`/api/companies`)
  //console.log("API getCompanies", response)
  return response.data as Company[]
      //setError(error?.response?.data?.error || `${error}`)
      //alert(error?.response?.data?.error || `${error}`)
}