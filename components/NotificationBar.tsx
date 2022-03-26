import { FC, useState } from "react"
import { Alert } from "react-bootstrap"
import styles from  "../CSS/styles.module.sass"

const NotificationBar: FC<{message:string}> = props => {

  const [show, setShow] = useState(true);
  const style = show ? styles.notification_bar_open : styles.notification_bar_close //"_open" : ""  styles.notification_bar + " " + (show ? "" : styles.close)
  //alert(style)

  return <div className={style}>
    <Alert dismissible variant="info" onClose={() => setShow(false)} className={styles.alert}>{props.message}</Alert>
  </div>
}

export default NotificationBar