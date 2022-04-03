import { relative } from "path"
import { FC } from "react"
import Spinner from "../components/Spinner"
import styles from  "../CSS/styles.module.sass"

interface Props {
  isLoading:boolean
}

export const SpinnerContainer:FC<Props> = props => {
  const {isLoading, children} = props
  return <div style={{position:"relative", minHeight: 150}}>
    <div>{children}</div>
    {isLoading ? <div className={styles.loader_overlay}>
      <span className={styles.loader_spinner}><Spinner type="Spin" /></span>
    </div> : null}
  </div>
}

export default SpinnerContainer