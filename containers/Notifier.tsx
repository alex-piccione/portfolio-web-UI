//import { useState } from "react";
import React, { FC, useState } from "react"

interface Notification {
  message:string
  type: "info" | "success"
}

interface Props {
  notifications:Notification[],
  addNotification: (message:string, type: "info" | "success") => void
}

const defaultValues:Props = {notifications:[], addNotification:() => { alert("not implemented")}}
const MessagesContext = React.createContext<Props>(defaultValues);

const NotificationProvider:FC = ({children}) => {
  const [notifications, setNotifications] = useState([] as Notification[]);
  const addNotification = (message:string, type: "info" | "success") => setNotifications([...notifications, {message, type}])
  return <MessagesContext.Provider value={{notifications, addNotification: addNotification}}>{children}</MessagesContext.Provider>
}

const useNotifications = () => React.useContext(MessagesContext);

export {NotificationProvider, useNotifications}

export interface INotifier {
  counter: number, // used to check state change
  showInfo: (message: string) => void
  showSuccess: (message: string) => void

  getInfo: () => string|undefined
  getSuccesso: () => string|undefined
}

//const [count, setCount] = useState<number>(0)
//const [infoMessage, setInfoMessage] = useState<string>()
//const [successMessage, setSuccessMessage] = useState<string>()

var counter:number = 0
var infoMessage:string
var successMessage:string

const setInfoMessage = (message:string) => {
  //debugger;
  infoMessage = message; 
  counter += 1 
}
const setSuccessMessage = (message:string) => {successMessage = message; counter+=1 }


const Notifier:INotifier = {
  counter: counter,
  showInfo: function (message: string): void {
    //alert("info: " + message)
    setInfoMessage(message)
  },
  showSuccess: function (message: string): void {
    alert("success: " + message)
    setSuccessMessage(message)
  },
  getInfo: () => infoMessage,
  getSuccesso: () => successMessage
  
}

const NotifierContext = React.createContext(Notifier)

export {NotifierContext}

export default Notifier