import { FC, useContext, useEffect, useState } from "react"
import { Alert } from "react-bootstrap"
import Notifier, {INotifier, NotifierContext} from "../containers/Notifier"
import styles from  "../CSS/styles.module.sass"

export type MessageType = "info" | "success" | "warning" | "danger"

const NotificationBar: FC<{message:string|undefined, type:MessageType, onClose:() => void}> = props => {

  //const notifier = useContext(NotifierContext)
  //debugger;
  //useEffect(() => {
  //  console.log("bar useEffect")
  //  notifier.getInfo()
  //}, [notifier.counter])  

  const [show, setShow] = useState(true);
  const style = show ? styles.notification_bar_open : styles.notification_bar_close
  const variant = 
    props.type === "info" ? "primary" :
    props.type === "success" ? "success" :
    props.type === "warning" ? "warning" :
    props.type === "danger" ? "danger" :
     "primary"

  return <div className={style}>
    <Alert dismissible variant={variant} onClose={() => {setShow(false); props.onClose && props.onClose()}} className={styles.alert}>{props.message}</Alert>
  </div>
}

const NotifierBar: FC<{_notifier:INotifier}> = props => {

  const notifier = useContext(NotifierContext)
  const [message, setMessage] = useState<string|undefined>(notifier.counter.toString())

  
  //debugger;
  useEffect(() => {
    console.log("NotifierBar useEffect")
    setMessage(notifier.getInfo())
  }, [notifier.counter])  

  useEffect(() => {
    console.log("NotifierBar useEffect on _notifier")
    setMessage(notifier.getInfo())
  }, [props._notifier.counter])  
  

  const [show, setShow] = useState(true);
  const style = show ? styles.notification_bar_open : styles.notification_bar_close
  const variant = "primary"
     "primary"

  return <>
   <div>show: {show ? "y": "n"}</div>
   <div>message: {message}</div>
   <div>notifier.counter: {notifier.counter}</div>
   <div className={style}>
    <Alert dismissible variant={variant} onClose={() => {setShow(false); }} className={styles.alert}>{message}</Alert>
  </div>
  </>
}

export {NotifierBar}

export default NotificationBar