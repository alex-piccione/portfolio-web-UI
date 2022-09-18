import axios from "axios"
import { EffectCallback, useEffect, useState } from "react"
import { Company } from "../Entities"
import { getLocale } from "./utils"

const defaultLocale = "it"

/**
 * useMountEffect
 * hook to run a function when component mount
 */
export const useMountEffect = (handler: EffectCallback) =>
  useEffect(handler, [])

/**
 * useLocale
 * hook to get the locale
 * @method locale: get the locale from browser. Default is "it".
 */
export const useLocale = () => {
  const [browserLocale, setBrowserLocale] = useState<string | undefined>(
    undefined
  )
  const [locale, setLocale] = useState(defaultLocale)
  const [language, setLanguage] = useState("it")

  useEffect(() => {
    // DON'T use window.navigator.language outside useEffect (window is not defined)
    //console.log("useLocale::window.navigator.language", window.navigator.language)
    const browserLanguage = window.navigator.language
    setBrowserLocale(browserLanguage)
    const locale = getLocale(browserLanguage) || defaultLocale
    const language = locale.substring(0, 2)
    setLocale(locale)
    setLanguage(language)
  }, [])

  return {
    browserLocale: browserLocale,
    locale: locale,
    language: language,
    setLocale,
    setLanguage,
  }
}

export const useCookie = <T>(name: string, initialValue: T) => {
  const [cookie, setCookie] = useState<T>(initialValue)

  const set = (value: T) => {
    sessionStorage.setItem(name, JSON.stringify(value))
    setCookie(value)
  }

  useEffect(() => {
    const value = sessionStorage.getItem(name)
    const tryGetValue = (value: string | null) => {
      if (value == null) return initialValue
      try {
        return JSON.parse(value) as T
      } catch (e) {
        throw new Error(
          `Cannot parse value "${value}" to type ${typeof initialValue}`
        )
        //return initialValue
      }
    }

    const parsedValue: T = tryGetValue(value)
    setCookie(parsedValue)
  }, [])

  return {
    value: cookie,
    setValue: set,
  }
}
/*
export const _useBaseCurrency = () => {
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
    validCurrencies,
    setCurrency: setCurrencySecure
  }
} 
*/

export const useCompanies = (
  setCompanies: (companies: Company[]) => void,
  setError: (error: string) => void
) => {
  //const companies = useState()

  axios
    .get(`/api/companies`)
    .then(response => setCompanies(response.data))
    .catch(error => {
      setError(error?.response?.data?.error || `${error}`)
    })

  /*return {
    companies,
  }*/
}
