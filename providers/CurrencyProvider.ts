import BaseProvider from "./BaseProvider"
import { Currency } from "../components/entities"

class CurrenciesProvider extends BaseProvider {  
  getCurrencies() {
    return super.get("currency", parser.parseCurrencies)
  }
}

const parser = {

  parseCurrencies: (data):Currency[] => {
    try{
      return (data as Array<any>).map(item => {
        return { Code:item.Code, Name:item.Name }
      })
    }
    catch (error) {
      // todo: log with Sentry or similar
      throw Error(`Failed to parse Currencies. ${error}`)
    }
  }  
}

export default CurrenciesProvider