import CurrenciesProvider from "./server providers/CurrencyServerProvider"
import helper from "./helper"

const currencyProvider = new CurrenciesProvider()

export default async function handler (req, res) {
  try {
    await currencyProvider.getCurrencies().then(result => {
      return res.status(200).json(result)
    })
    .catch(error => {
      return helper.Error_500(res, `${error}`)
    })
  } catch (error) {
    return helper.Error_500(res, `[from try/catch] ${error}`)
  }
} 