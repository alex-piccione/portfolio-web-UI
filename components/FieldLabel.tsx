import { FC } from "react"
import Styles from "../components/styles"

const FieldLabel:FC<{text:string, inline?:boolean}> = props => {
  const {text, inline} = props
  const style = {display: inline ? "inline" : "block" }

  return <div style={style} className={Styles.text.fieldLabel}>{text}</div>
}

export default FieldLabel