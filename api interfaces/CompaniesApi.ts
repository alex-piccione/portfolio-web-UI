import { Company } from "../components/entities"
import { get } from "./helper"

/*export const getCompanies = async () => {
  const response = await axios.get(`/api/companies`)
  return response.data as Company[]
      //setError(error?.response?.data?.error || `${error}`)
      //alert(error?.response?.data?.error || `${error}`)
}*/

const api = {
  getCompanies: () => get<Company[]>(`/api/companies`),
}

export default api
