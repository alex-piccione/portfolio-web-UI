import { FC } from "react"
import styles from "../CSS/styles.module.sass"

const Panel:FC = props => {

  return <div className={styles.panel}>{props.children}</div>
}

export default Panel