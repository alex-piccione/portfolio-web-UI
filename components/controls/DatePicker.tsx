import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { getUserCulture, getUserLocale } from "../../common/locale"

export default function _(props:{initialDate?:Date, className?:string, onChange:(date:Date) => void}) {
  const [date, setDate] = useState(props.initialDate||new Date());
  const locale = getUserLocale()
  const culture = getUserCulture()

  let dateFormat = culture.ShortDatePattern //locale.formatLong.date({ width: "short" })
 
  const handleChange = (date:Date) => {
    setDate(date) 
    props.onChange(date)
  }

  return <DatePicker
    locale={locale}
    dateFormat={dateFormat}
    selected={date}
    onChange={handleChange}
    wrapperClassName="date-picker-wrapper"  
    calendarClassName="calendar"  
    className={props.className || "form-control"}       
  />
}
