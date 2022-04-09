import { useLocale } from "./hooks"
import { getUserCulture } from "./locale"


const culture = getUserCulture()

export default {
  shortDate: (date:Date) => date.toLocaleDateString(),
  monthDay: (date:Date) => culture.MonthDayPattern.replace("MM", (date.getMonth()+1).toString()).replace("dd", date.getDate().toString())  
}