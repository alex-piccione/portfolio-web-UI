import { createContext, FC, useContext } from "react"
import { useCookie } from "../common/hooks"

type currency = "EUR" | "USD" | "GBP"

const defaultCurrency = "EUR"

interface BaseCurrency {  
  currencies: currency[]
  currency: currency,
  setCurrency: (currency:currency) => void
}

const BaseCurrencyContext = createContext<BaseCurrency>({
  currencies: ["EUR", "USD", "GBP"],
  currency: defaultCurrency,
  setCurrency: (x:currency) => {throw new Error("Not implemented")}
});

const BaseCurrencyProvider:FC = ({children}) => {
  const {value, setValue} = useCookie<currency>("base-currency", defaultCurrency)
  
  const baseCurrency:BaseCurrency = {
    currencies: ["EUR", "USD", "GBP"],
    currency: value,
    setCurrency: setValue
  }

  return <BaseCurrencyContext.Provider value={baseCurrency}>
    {children}
  </BaseCurrencyContext.Provider>
}

const useBaseCurrency = () => useContext(BaseCurrencyContext);

export {BaseCurrencyProvider, useBaseCurrency, defaultCurrency}