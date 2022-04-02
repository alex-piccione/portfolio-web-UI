import { FC } from "react"
import styles from "../CSS/styles.module.sass"

const FieldLabel:FC<{value:string|undefined, inline?:boolean}> = props => {
  const {value, inline} = props
  const style = {display: inline ? "inline" : "block" }

  return <div style={style} className={styles.fieldValue}>{value}</div>
}

export default FieldLabel