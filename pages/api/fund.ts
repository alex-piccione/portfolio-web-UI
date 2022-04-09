// try to rename it fund.api.ts
import helper from "./api helper"
import { NextApiRequest, NextApiResponse } from "next"
import FundServerProvider from "./server providers/FundServerProvider"

const fundProvider = new FundServerProvider()

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
  if (req.method == "GET") {
    const currency = helper.getQuerystringValue(req, "currency")
    const limit = Number(helper.getQuerystringValue(req, "limit"))
    return await fundProvider.getFundRecords(currency, limit).then(result => {
      return res.status(200).json(result)
    })
    .catch(error => {
      return helper.Error_500(res, `${error}`)
    })
  }
  else helper.Error_500(res, `Unmanaged request method: ${req.method}`)
}