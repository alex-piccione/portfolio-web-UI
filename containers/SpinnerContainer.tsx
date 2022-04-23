import { FC } from "react"
import Spinner from "../components/Spinner"
import styles from  "../CSS/styles.module.sass"

interface Props {
  isLoading:boolean,
  size?: "big"|"small",
  occupyHighSpace?: boolean
}

// "position: relative" is required to render it inside the container it is positioned in.
export const SpinnerContainer:FC<Props> = props => {
  const {isLoading, size, occupyHighSpace, children} = props
  return <div style={{position:"relative", minHeight: occupyHighSpace === undefined ? 150 : 40}}>
    <div>{children}</div>
    {isLoading ? <div className={styles.loader_overlay}>
      <span className={styles.loader_spinner}><Spinner type="Spin" small={size === "small"} /></span>
    </div> : null}
  </div>
}

export default SpinnerContainer