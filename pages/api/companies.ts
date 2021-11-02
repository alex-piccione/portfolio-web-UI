import getConfig from "next/config"
import CompanyProvider from "../../providers/compnayProvider"

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const aws_region = serverRuntimeConfig.AWS.region

export default async function handler(req, res) {
  try {
    const companies = await CompanyProvider.getCompanies()
    return res.status(200).json(companies)
  } catch (error) {
    return res.status(500).json({ "error": `${error}` })
  }
}