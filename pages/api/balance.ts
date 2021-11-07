import BalanceProvider from "../../providers/BalanceProvider"
import helper from "./helper"

const balanceProivier = new BalanceProvider()

export default async function handler (req, res) {
  try {
    const baseCurrency = req.query["base-currency"] // undefined if not found
    return balanceProivier.getBalance(baseCurrency).then(result => {
      return res.status(200).json(result)
    })
    .catch(error => {
      return helper.Error_500(res, `${error}`)
    })
  } catch (error) {
    return helper.Error_500(res, `[from try/catch] ${error}`)
  }
} 