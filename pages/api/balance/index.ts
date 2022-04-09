import BalanceServerProvider from "../server providers/BalanceServerProvider"
import helper from "../api helper"
import { NextApiRequest, NextApiResponse } from "next/types"

const balanceProvider = new BalanceServerProvider()

export default async function handler (req:NextApiRequest, res:NextApiResponse) {

  try {
    // TODO: create a util to extract querystring values
    if ("base-currency" in req.query == false) throw Error("base-currency is required")
    const baseCurrency = req.query["base-currency"] as string // (when string = false) undefined if not found
    return balanceProvider.getBalance(baseCurrency).then(result => {
      return res.status(200).json(result)
    })
    .catch(error => {
      return helper.Error_500(res, `Failed to call provider .getBalance(). ${error}`)
    })
  } catch (error) {
    return helper.Error_500(res, `[from try/catch] ${error}`)
  }
} 