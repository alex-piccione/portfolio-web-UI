import { FC, ReactNode, useEffect, useState } from "react"
import NotificationBar, { MessageType } from "../components/NotificationBar"
import Notifier, { INotifier } from "./Notifier"

interface Props {
  notifier: INotifier,
  children: (props: { 
    showMessage: (message: string, type:MessageType) => void,
    hideMessage: () => void
   }) => ReactNode
}

const container:FC<Props> = ({children, notifier}) => {
  const [message, setMessage] = useState<string>()
  const [type, setType] = useState<MessageType>("info")

  useEffect(() => {
    console.log ("bar container useEffect")
    setMessage(Notifier.getInfo())

  }, [notifier])

  const showMessageInternal = (message:string, type:MessageType) => {
    setMessage(message)
    setType(type)
  }

  return <>
    {children({showMessage:showMessageInternal, hideMessage:() => setMessage(undefined)})}
    {message && <NotificationBar message={message} type={type} onClose={() => setTimeout(() => setMessage(undefined), 500)}></NotificationBar>}
  </>
} 

export default container