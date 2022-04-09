import { FC } from "react"
import Spinner from "../components/Spinner"
import styles from  "../CSS/styles.module.sass"

interface Props {
  isLoading:boolean,
  occupyMinSpace?: boolean
}

/*
The position: relative is required to ...

*/
export const SpinnerContainer:FC<Props> = props => {
  const {isLoading, occupyMinSpace, children} = props
  return <div style={{position:"relative", minHeight: occupyMinSpace ? 150 : 40}}>
    <div>{children}</div>
    {isLoading ? <div className={styles.loader_overlay}>
      <span className={styles.loader_spinner}><Spinner type="Spin" /></span>
    </div> : null}
  </div>
}

export default SpinnerContainer