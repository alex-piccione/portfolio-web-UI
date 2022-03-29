import CurrenciesProvider from "./server providers/CurrencyServerProvider"
import helper from "./helper"
import { NextApiRequest, NextApiResponse } from "next"

const currencyProvider = new CurrenciesProvider()

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
  if (req.method == "GET") {
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
  else if (req.method == "POST") {
    try {
      await currencyProvider.createCurrency(req.body).then(result => {      
        return res.status(200).json(result)
      })
      .catch(error => {
        return helper.Error_500(res, `${error}`)
      })
    } catch (error) {
      return helper.Error_500(res, `[from try/catch] ${error}`)
    }
  }
  else
    return helper.Error_500(res, `Unmanaged request method: ${req.method }`)
} 