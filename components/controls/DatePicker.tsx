import React, { useState } from "react"
import { useRouter } from "next/router"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { getUserLocale } from "../../common/locale"

export default function _(props:{initialDate?:Date, className?:string, onChange:(date:Date) => void}) {
  const [date, setDate] = useState(props.initialDate||new Date());
  const router = useRouter()    
  const locale = getUserLocale(router.locale)

  let dateFormat = locale.formatLong.date({ width: "short" })
  console.log("dateFormat: " + dateFormat)

  const handleChange = (date) => {
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