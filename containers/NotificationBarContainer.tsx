import { FC, ReactNode, useState } from "react"
import NotificationBar, { MessageType } from "../components/NotificationBar"

interface Props {
  children: (props: { 
    showMessage: (message: string, type:MessageType) => void,
    hideMessage: () => void
   }) => ReactNode
}

const container:FC<Props> = ({children}) => {
  const [message, setMessage] = useState<string>()
  const [type, setType] = useState<MessageType>("info")

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