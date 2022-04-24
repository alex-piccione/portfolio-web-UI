import { Component, createElement } from "react"
import { FiPlus, FiPlusCircle, FiCode, FiTrendingUp } from "react-icons/fi"
import { MdAdd, MdAccountBalance, MdLockClock, MdTimeline, MdSavings, MdExpandMore, MdExpandLess, MdNote } from "react-icons/md"
import Styles, { Color } from "./styles"
//I choose [__Feather__](https://feathericons.com/) https://react-icons.github.io/react-icons/icons?name=fi
//``import { IconName } from "react-icons/fi"``
// Icons library: https://feathericons.com

// Material Design Icons Library: https://fonts.google.com/icons?selected=Material+Icons

const iconsMap = {
  "add-record": MdAdd, //FiPlus,
  //"delete-record": //"plus-circle": FiPlusCircle""
  "bank": MdSavings, // MdAccountBalance,
  "exchange": MdTimeline, // FiCode,
  "stacking": MdLockClock, // FiTrendingUp  // FiRepeat
  "expand": MdExpandMore,
  "collapse": MdExpandLess,
  "note": MdNote
}

export type IconType = 
  "add-record" | 
  //"remove-record" |
  "bank" | 
  "exchange" | 
  "stacking" | 
  "expand" | 
  "collapse" | 
  "note"

const Icon = (props:{icon:IconType, color?:Color, clickable?:boolean}) => {
  const element = createElement(iconsMap[props.icon], {})
  const colorStyle = props.color === undefined ? "inherit" : Styles.colors[props.color]
  return <> {props.clickable ? <span style={{cursor: "pointer", color: `${colorStyle}`}} >{element}</span> : element}</>
}

export default Icon