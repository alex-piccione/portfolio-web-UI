import helper from "./helper"
import { NextApiRequest, NextApiResponse } from "next"
import FundServerProvider from "./server providers/FundServerProvider"

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
  else helper.Error_500(res, `Unmanaged request method: ${req.method}`)
}