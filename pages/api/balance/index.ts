import BalanceServerProvider from "../server providers/BalanceServerProvider"
import helper from "../helper"

const balanceProvider = new BalanceServerProvider()

export default async function handler (req, res) {

  try {
    const baseCurrency = req.query["base-currency"] // undefined if not found
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