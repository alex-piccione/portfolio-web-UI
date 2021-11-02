import getConfig from "next/config"
import { Company } from "../../components/entities"
import CompanyProvider from "../../providers/companyProvider"
import helper from "./helper"

//const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

export default async function handler(req, res) {
  try {
    const companies = await CompanyProvider.getCompanies()
    return res.status(200).json(companies)
  } catch (error) {
    return helper.Error_500(res, `${error}`)
  }
}