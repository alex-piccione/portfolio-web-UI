import { useEffect, useState } from "react"
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