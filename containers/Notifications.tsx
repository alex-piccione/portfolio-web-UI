import { FC, createContext, useContext, useState } from "react"
import NotificationsBar from "../components/NotificationsBar"

export type MessageType = "info" | "success" | "warning" | "danger"

export interface Notification {
  id: number
  message:string
  type: MessageType
}

interface Notifier {
  notifications:Notification[],
  showNotification: (message:string, type:MessageType) => void
  removeNotification: (id:number) => void
}

const defaultValues:Notifier = {notifications:[], 
  showNotification:() => { alert("Error. Are you using the context inside its Provider?")},
  removeNotification:() => { alert("Error. Are you using the context inside its Provider?")}
}
const MessagesContext = createContext<Notifier>(defaultValues);

const NotificationProvider:FC = ({children}) => {
  const [notifications, setNotifications] = useState([] as Notification[]);
  const addNotification = (message:string, type:MessageType) => setNotifications([...notifications, { id:Math.random(), message, type}])
  const removeNotification = (id:number) => setNotifications(notifications.filter(n => n.id !== id))

  return <MessagesContext.Provider value={{notifications, showNotification: addNotification, removeNotification}}>
    {children}
    <NotificationsBar />
  </MessagesContext.Provider>
}

const useNotifications = () => useContext(MessagesContext);
// Error at runtime: "Hooks can only be called inside of the body of a function component"
const showInfo = (message:string) => useContext(MessagesContext).showNotification(message, "info")
const showSuccess = (message:string) => useContext(MessagesContext).showNotification(message, "success")
const showError = (message:string) => useContext(MessagesContext).showNotification(message, "danger")


export {NotificationProvider, useNotifications, showInfo, showSuccess, showError}