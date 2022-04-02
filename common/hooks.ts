import axios from "axios"
import { EffectCallback, useEffect, useState } from "react"
import { Company } from "../Entities"
import { getLocale } from "./utils"

const defaultLocale = "it"

/**
 * useMountEffect
 * hook to run a function when component mount
 */
export const useMountEffect = (handler:EffectCallback) => useEffect(handler, [])

/**
 * useLocale
 * hook to get the locale
 * @method locale: get the locale from browser. Default is "it".
 */
export const useLocale = () => {

  const [locale, setLocale] = useState(defaultLocale)
  const [language, setLanguage] = useState("it") 

  useEffect(() => {
    console.log("useLocale::window.navigator.language", window.navigator.language)
    const locale = getLocale(window.navigator.language) || defaultLocale
    const language = locale.substring(0, 2)
    setLocale(locale)
    setLanguage(language)
  }, [])
  
  return {
    locale: locale,
    language: language,
    setLocale,
    setLanguage,
  }
}

export const useBaseCurrency = () => {
  const baseCurrency = "EUR"
  const validCurrencies = ["EUR", "USD", "GBP"]
  const [currency, setCurrency] = useState(baseCurrency)

  useEffect(() => {    
    setCurrency(sessionStorage.getItem("base-currency") || baseCurrency)
  }, [])

  const setCurrencySecure = (currency:string) => {
    if(validCurrencies.includes(currency)) {
      sessionStorage.setItem("base-currency", currency)
      setCurrency(currency)
    }
  }

  return {
    currency,
    setCurrency: setCurrencySecure
  }
} 

export const useCompanies = (setCompanies:(companies:Company[]) => void, setError:(error:string) => void) => {

  //const companies = useState()

  axios.get(`/api/companies`)
    .then(response => setCompanies(response.data))
    .catch(error => {
      setError(error?.response?.data?.error || `${error}`)
  });

  /*return {
    companies,
  }*/
}

