import BaseProvider from "./BaseServerProvider"
import { Currency } from "../../../Entities"

class CurrenciesServerProvider extends BaseProvider {  
  getCurrencies() {
    return super.get("currency", parser.parseCurrencies)
  }

  createCurrency(currency:Currency) {
    return super.post("currency", currency)
  }
}

const parser = {

  parseCurrencies: (data:any):Currency[] => {
    try{
      return (data as Array<any>).map(item => {
        return { code:item.Code, name:item.Name }
      })
    }
    catch (error) {
      // todo: log with Sentry or similar
      throw Error(`Failed to parse Currencies. ${error}`)
    }
  }  
}

export default CurrenciesServerProvider