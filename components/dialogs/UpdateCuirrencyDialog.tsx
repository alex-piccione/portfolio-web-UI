import { FC } from "react"
import Dialog from "./Dialog"

const UpdateCurrencyDialog: FC = () => {

  return <Dialog 
    title="New Currency"
    show={true} 
    confirmClick={function (): void {
      throw new Error("Function not implemented.")
    } } 
    cancelClick={function (): void {
      throw new Error("Function not implemented.")
    } }  >
    AAAA
  </Dialog>
}

export default UpdateCurrencyDialog