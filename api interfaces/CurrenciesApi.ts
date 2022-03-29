import { Currency } from "../components/entities"
import { get, post } from "./helper"

const api = {
  getCurrencies: () => get<Currency[]>(`/api/currencies`),
  saveCurrency: (currency: Currency) => post<Currency>(`/api/currencies`, currency)
}

export default api