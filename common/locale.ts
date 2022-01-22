import {Locale} from "date-fns"
import baseLocale from "date-fns/locale/en-US"
import { useRouter } from "next/router"
import locales, { L10N } from "./locales"

export const getShortDateFormat = (locale:string) => {
  return "dd/MM/yyyy"
}

export const getUserLocale = (locale?:string):Locale => {  
  const router = useRouter() 
  locale = locale || router.locale || "en-US"
  console.log("getUserLocale: " + locale)

  const culture:L10N = locales[locale]

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
