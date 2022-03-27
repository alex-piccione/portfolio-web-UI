import { FC, useState } from "react"
import { Alert } from "react-bootstrap"
import { useNotifications, Notification } from "../containers/Notifications"
import styles from  "../CSS/styles.module.sass"

const NotificationAlert: FC<Notification> = (notification) => {

  const [show, setShow] = useState(true);
  const style = show ? styles.notification_bar_open : styles.notification_bar_close
  const variant = 
    notification.type === "info" ? "primary" :
    notification.type === "success" ? "success" :
    notification.type === "warning" ? "warning" :
    notification.type === "danger" ? "danger" :
     "primary"

  return <div className={style}>
    <Alert dismissible variant={variant} onClose={() => {setShow(false);} } className={styles.alert}>{notification.message}</Alert>
  </div>
}

const NotificationsBar: FC = () => {
  const {notifications } = useNotifications()

/*
  const [message, setMessage] = useState<string>()
  const [type, setType] = useState<MessageType>("info")

  useEffect(() => {
    console.log ("bar container useEffect")
    setMessage(Notifier.getInfo())

  }, [notifier])

  const showMessageInternal = (message:string, type:MessageType) => {
    setMessage(message)
    setType(type)
  
  return <>
    {children({showMessage:showMessageInternal, hideMessage:() => setMessage(undefined)})}
    {message && <NotificationBar message={message} type={type} onClose={() => setTimeout(() => setMessage(undefined), 500)}></NotificationBar>}
  </>
*/
  //return <div>notifications: {notifications.length}</div>
  return <>{ notifications.map( (notification:Notification, x:number) => 
    <NotificationAlert key={x} {...notification} />
    )}</>  
}

export default NotificationsBar