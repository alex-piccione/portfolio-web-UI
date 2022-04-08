import { Component, createElement } from "react"
import { FiPlus, FiPlusCircle, FiCode, FiTrendingUp } from "react-icons/fi"
import { MdAdd, MdAccountBalance, MdLockClock, MdTimeline, MdSavings, MdExpandMore, MdExpandLess } from "react-icons/md"
//I choose [__Feather__](https://feathericons.com/) https://react-icons.github.io/react-icons/icons?name=fi
//``import { IconName } from "react-icons/fi"``
// Icons library: https://feathericons.com

// Material Design Icons Library: https://fonts.google.com/icons?selected=Material+Icons

const iconsMap2 = {
  "add-record": <MdAdd />, //FiPlus,
  //"delete-record": //"plus-circle": FiPlusCircle""
  "bank": <MdSavings />, // MdAccountBalance,
  "exchange": <MdTimeline />, // FiCode,
  "stacking": <MdLockClock /> // FiTrendingUp  // FiRepeat
}

const iconsMap = {
  "add-record": MdAdd, //FiPlus,
  //"delete-record": //"plus-circle": FiPlusCircle""
  "bank": MdSavings, // MdAccountBalance,
  "exchange": MdTimeline, // FiCode,
  "stacking": MdLockClock, // FiTrendingUp  // FiRepeat
  "expand": MdExpandMore,
  "collapse": MdExpandLess,
}

export type IconType = 
  "add-record" | 
  //"delte-record" |
  "bank" | 
  "exchange" | 
  "stacking" | 
  "expand" | 
  "collapse"

//iconsMap[props.icon]()

const Icon = (props:{icon:IconType, clickable?:boolean}) => {
  const element = createElement(iconsMap[props.icon], {})
  return <> {props.clickable ? <span style={{cursor: "pointer"}}>{element}</span> : element}</>
}
  
  //props.clickable ? <span style={{cursor: "pointer"}}>{iconsMap[props.icon]}</span> : iconsMap[props.icon]
  //<span style={{cursor: "pointer", color: "red"}}>{iconsMap[props.icon]}</span>
  //<>
  //  {props.clickable ? <span style={{cursor: "pointer"}}>{iconsMap[props.icon]}</span> : iconsMap[props.icon]}
  //</>

export default Icon