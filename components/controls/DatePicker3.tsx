import { useState } from 'react'
import { DatePicker as Picker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { getUserLocale } from '../../common/locale'

const DatePicker = (props:{
  initialDate:Date|"today"|undefined,
  onChange?:(date:Date) => void,
}) => {

  const locale = getUserLocale()

  const initialDate = props.initialDate === "today" ? new Date() : props.initialDate
  const [date, setDate] = useState(initialDate)

  const handleChange = (date:Date|null) => { 
    setDate(date||undefined)
  }

  const modifiers = {
    //selected: date => isSameDay((new Date()).getDay(), date)
  }

  return <Picker locale={locale} onDateChange={handleChange} modifiers={modifiers} >
    {({ inputProps, focused }) => (
        <input className={'input' + (focused ? ' -focused' : '')}
          {...inputProps} value={date?.toLocaleDateString()||""}
        />
      )}
  </Picker>
  //return <div data-locale={locale}><Picker selected={date} onChange={handleChange} locale={locale} /></div>
  //return <input type="date" name="date" id="date" value={date.toLocaleDateString()} onChange={handleChange} />
  
}

export default DatePicker