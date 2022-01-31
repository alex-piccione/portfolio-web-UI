import BalanceProvider from "../server providers/BalanceServerProvider"
import helper from "../helper"

const balanceProivier = new BalanceProvider()

export default async function handler (req, res) {
  try {
    const body = req.body // null if not found
    return balanceProivier.updateFund(body).then(result => {
      return res.status(200).json(result)
    })
    .catch(error => {
      return helper.Error_500(res, `${error}`)
    })
  } catch (error) {
    return helper.Error_500(res, `[from try/catch] ${error}`)
  }
}

/*export default async function handler (req, res) {
  return req.method == "GET" ? getBalance(req, res) :
    req.method == "POST" ? updateFund(req, res): 
    helper.Error_400(res, `unknown route`)
} */