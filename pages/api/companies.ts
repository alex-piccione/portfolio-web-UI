import getConfig from "next/config"
import CompanyProvider from "../../providers/compnayProvider"

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const aws_region = serverRuntimeConfig.AWS.region

export default function handler(req, res) {

  return CompanyProvider.getCompanies()
    .then(companies  => res.status(200).json(companies))
    .catch(error => res.status(500).json({"error": `${error}`}))
}