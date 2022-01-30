import {Locale} from "date-fns"
import baseLocale from "date-fns/locale/en-US"
import { useLocale } from "./hooks"
import locales, { L10N } from "./locales"

export const getShortDateFormat = (locale:string) => {
  return "dd/MM/yyyy"
}

export const getUserLocale = ():Locale => {  
  const locale = useLocale().locale
  console.log("getUserLocale: " + locale)

  const culture:L10N = locales[locale]

  // ps, ps-fa have a date pattern like "g yyyy/M/d"
  // ar-SA has a date pattern like "d‏/M‏/yyyy g"
  // the "g" create a problem when date-fns format the date
  // Error: Format string contains an unescaped latin alphabet character `g`

  if (culture.ShortDatePattern.startsWith("g ")) 
    culture.ShortDatePattern = culture.ShortDatePattern.substring(2)
  else if (culture.ShortDatePattern.endsWith(" g")) 
    culture.ShortDatePattern = culture.ShortDatePattern.substring(0, culture.ShortDatePattern.length-2)

  return {
    ...baseLocale,
    code: locale,
    formatLong: {
      date: (args:any[]) => culture.ShortDatePattern,
      time: (args:any[]) => culture.ShortDatePattern,
      dateTime: (args:any[]) => culture.ShortDatePattern + " " + culture.ShortTimePattern, // mmmhhh
    },
    localize: {
      ...baseLocale.localize,
      //ordinalNumber: (num:number) => num + ".",
      month: (index) => culture.MonthNames[index],
      day: (index) => culture.AbbreviatedDayNames[index],   
    }
  }
}

