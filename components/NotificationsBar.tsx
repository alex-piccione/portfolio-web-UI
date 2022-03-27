import { FC, useState } from "react"
import { Alert } from "react-bootstrap"
import { useNotifications, Notification } from "../containers/Notifications"
import styles from  "../CSS/styles.module.sass"

interface AlertProps {
  notification:Notification
  onClose:() => void
}

const NotificationAlert: FC<AlertProps> = props => {
  const { notification, onClose } = props
  const [show, setShow] = useState(true);
  const containerStyle = show ? styles.notification_bar_open : styles.notification_bar_close
  const variant = 
    notification.type === "info" ? "primary" :
    notification.type === "success" ? "success" :
    notification.type === "warning" ? "warning" :
    notification.type === "danger" ? "danger" :
     "primary"

  const close = () => {
    setShow(false)    
    onClose()
  }

  return <div className={containerStyle}>
    <Alert dismissible variant={variant} onClose={close} className={styles.alert}>{notification.message}</Alert>
  </div>
}

const NotificationsBar: FC = () => {
  const {notifications, removeNotification } = useNotifications()

  return <>{notifications.map( (notification:Notification, x:number) => 
    <NotificationAlert key={x} notification={notification} onClose={() => removeNotification(notification.id)} />
    )}</>
}

export default NotificationsBar