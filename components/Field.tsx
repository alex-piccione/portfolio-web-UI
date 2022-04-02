import { FC } from "react"
import styles from "../CSS/styles.module.sass"
import FieldValue from "./FieldValue"
import FieldLabel from "./FieldLabel"

interface Props {
  label:string
  value:string|undefined
  inline?:boolean
  singleRow?:boolean
}

const Field:FC<Props> = props => {
  const {label, value, inline, singleRow} = props
  const style = {display: inline ? "inline" : "block" }

  return <div style={style}>
    <FieldLabel text={label} inline={singleRow}  />
    <FieldValue value={value} inline={singleRow}  />
  </div>
}

export default Field