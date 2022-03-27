import { FC, createContext, useContext, useState } from "react"
import NotificationsBar from "../components/NotificationsBar"

export type MessageType = "info" | "success" | "warning" | "danger"

export interface Notification {
  message:string
  type: MessageType
}

interface NotificationsState {
  notifications:Notification[],
  addNotification: (message:string, type:MessageType) => void
}

const defaultValues:NotificationsState = {notifications:[], addNotification:() => { alert("Error. Are you using the context inside its Provider?")}}
const MessagesContext = createContext<NotificationsState>(defaultValues);

const NotificationProvider:FC = ({children}) => {
  const [notifications, setNotifications] = useState([] as Notification[]);
  const addNotification = (message:string, type:MessageType) => setNotifications([...notifications, {message, type}])

  return <MessagesContext.Provider value={{notifications, addNotification: addNotification}}>
    {children}
    <NotificationsBar />
    <div>notifications: {notifications.length}</div>
    <div>
      {notifications.map( (n, x) => <div key={x}> {n.type} - {n.message}</div>)}      
    </div>
  </MessagesContext.Provider>
}

const useNotifications = () => useContext(MessagesContext);

export {NotificationProvider, useNotifications}