import CompanyProvider from "./server providers/CompanyServerProvider"
import helper from "./helper"
import { NextApiRequest, NextApiResponse } from "next"

const companyProvider = new CompanyProvider()

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
  try {

    switch (req.method) {
      case "GET":
        await companyProvider.getCompanies().then(result => {
          return res.status(200).json(result)
        })
        .catch(error => {
          return helper.Error_500(res, `${error}`)
        })
        break;
        
      case "POST":
        await companyProvider.createCompany(req.body).then(result => {
          return res.status(201).json(result)
        })
        .catch(error => {
          return helper.Error_500(res, `${error}`)
        })
    }

  } catch (error) {
    return helper.Error_500(res, `[from try/catch] ${error}`)
  }
} 