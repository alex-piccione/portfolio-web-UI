import helper from "../helper"
import { NextApiRequest, NextApiResponse } from "next"
import FundServerProvider from "../server providers/FundServerProvider"
import { FundUpdate } from "../../../Entities"

const fundProvider = new FundServerProvider()

export default async function handler (req:NextApiRequest, res:NextApiResponse) {

  if (req.method == "POST") {
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