import helper from "./helper"
import { NextApiRequest, NextApiResponse } from "next"
import FundServerProvider from "./server providers/FundServerProvider"
import { FundUpdate } from "../../Entities"

const fundProvider = new FundServerProvider()

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
  if (req.method == "GET") {
    const currency = helper.getQuerystringValue(req, "currency")
    const from = new Date(helper.getQuerystringValue(req, "from"))
    return await fundProvider.getFundRecords(currency, from).then(result => {
      return res.status(200).json(result)
    })
    .catch(error => {
      return helper.Error_500(res, `${error}`)
    })
  }
  else if (req.method == "POST" && req.url?.startsWith("/api/fund/update")) {
    return updateFund(req, res)
  }
  else helper.Error_500(res, `Unmanaged request method: ${req.method}`)
}


const updateFund = (req:NextApiRequest, res:NextApiResponse) => {
  try {
    const body:FundUpdate = req.body // null if not found
    return fundProvider.updateFund(body).then(result => {
      return res.status(200).json(result)
    })
    .catch(error => {
      return helper.Error_500(res, `${error}`)
    })
  } catch (error) {
    return helper.Error_500(res, `[from try/catch] ${error}`)
  }
}