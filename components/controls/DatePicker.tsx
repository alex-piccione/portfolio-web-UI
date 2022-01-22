import React, { useState } from "react"
import { useRouter } from "next/router"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { getUserLocale } from "../../common/locale"

export default function _(props:{initialDate?:Date, onChange:(date:Date) => void}) {
  const [date, setDate] = useState(new Date());

  const router = useRouter()  
  console.log("router.locale: " + router.locale)
  const locale = getUserLocale(router.locale)

  let dateFormat = locale.formatLong.date({ width: "short" });

  return (
    <>
    <DatePicker
      locale={locale}
      dateFormat={dateFormat}
      selected={props.initialDate||new Date()}
      onChange={props.onChange}
      wrapperClassName="date-picker-wrapper"      
    />
    (locale: {locale.code})
    </>
  );
}
