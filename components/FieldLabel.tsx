import { FC } from "react"
import styles from "../CSS/styles.module.sass"

const FieldLabel:FC<{text:string, inline?:boolean}> = props => {
  const {text, inline} = props
  const style = {display: inline ? "inline" : "block" }

  return <div style={style} className={styles.fieldLabel}>{text}</div>
}

export default FieldLabel