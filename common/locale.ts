// This locale (en-US) is used only to avoid having undefined properties, something is better than nothing.
// import {Locale} from "date-fns" gives an useless object with undefined properties.
import baseLocale from "date-fns/locale/en-US"
import { useLocale } from "./hooks"
import locales, { L10N } from "./locales"

// flags: https://flagsworld.org/

const getCulture = (localeCode:string) => {
  if (!(localeCode in locales)) throw new Error(`Locale ${localeCode} not found`)
  const culture:L10N = locales[localeCode]

  // ps, ps-fa have a date pattern like "g yyyy/M/d"
  // ar-SA has a date pattern like "d‏/M‏/yyyy g"
  // the "g" create a problem when date-fns format the date
  // Error: Format string contains an unescaped latin alphabet character `g`

  if (culture.ShortDatePattern.startsWith("g ")) 
    culture.ShortDatePattern = culture.ShortDatePattern.substring(2)
  else if (culture.ShortDatePattern.endsWith(" g")) 
    culture.ShortDatePattern = culture.ShortDatePattern.substring(0, culture.ShortDatePattern.length-2)

  return culture
}

export const getUserCulture = ():L10N => {  
  const locale = useLocale().locale
  return getCulture(locale)
}

export const getUserLocale = ():Locale => {  
  const locale = useLocale().locale
  const culture = getCulture(locale)

  return {
    ...baseLocale,
    code: locale,
    formatLong: {
      date: (args:any[]) => culture.ShortDatePattern,
      time: (args:any[]) => culture.ShortDatePattern,
      dateTime: (args:any[]) => culture.ShortDatePattern + " " + culture.ShortTimePattern, // little bit hacky and not really culture specific
    },    
    localize: {
      ...baseLocale.localize!,
      month: (index) => culture.MonthNames[index],
      day: (index) => culture.AbbreviatedDayNames[index],   

    },
    options: {
      ...baseLocale.options,
      weekStartsOn: culture.FirstDayOfWeek
    }

  }
}

