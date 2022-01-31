import CompanyProvider from "./server providers/CompanyServerProvider"
import helper from "./helper"

export default async function handler (req, res) {
  try {
    await CompanyProvider.getCompanies().then(result => {
      return res.status(200).json(result)
    })
    .catch(error => {
      return helper.Error_500(res, `${error}`)
    })
  } catch (error) {
    return helper.Error_500(res, `[from try/catch] ${error}`)
  }
} 