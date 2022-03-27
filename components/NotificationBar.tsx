import { FC, useState } from "react"
import { Alert } from "react-bootstrap"
import styles from  "../CSS/styles.module.sass"

export type MessageType = "info" | "success" | "warning" | "danger"

const NotificationBar: FC<{message:string|undefined, type:MessageType, onClose:() => void}> = props => {
  const [show, setShow] = useState(true);
  const style = show ? styles.notification_bar_open : styles.notification_bar_close
  const variant = 
    props.type === "info" ? "primary" :
    props.type === "success" ? "success" :
    props.type === "warning" ? "warning" :
    props.type === "danger" ? "danger" :
     "primary"

  return <div className={style}>
    <Alert dismissible variant={variant} onClose={() => {setShow(false); props.onClose()}} className={styles.alert}>{props.message}</Alert>
  </div>
}

export default NotificationBar