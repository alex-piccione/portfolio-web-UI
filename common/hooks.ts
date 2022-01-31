import axios from "axios"
import { useEffect, useState } from "react"
import { Company } from "../components/entities"
import { getLocale } from "./utils"

const defaultLocale = "it"

/**
 * useMountEffect
 * hook to run a function when component mount
 */
export const useMountEffect = handler => useEffect(handler, [])

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