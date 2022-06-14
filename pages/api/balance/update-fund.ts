import BalanceProvider from "../server providers/BalanceServerProvider"
import helper from "../helper"
import { FundUpdate } from "../../../Entities"
import { NextApiRequest, NextApiResponse } from "next"

const provider = new BalanceProvider()

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
  try {
    const body:FundUpdate = req.body // null if not found

    return provider._updateFund(body).then(result => {
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