import { FC } from "react"
import { Currency } from "../entities"
import Dialog, { DialogProps } from "./Dialog"

interface Props {
  show: boolean
  currencyToUpdate:Currency|undefined
  onClose: (addedOrUpdated:boolean) => void
}

const UpdateCurrencyDialog: FC<Props> = props => {

  const isNew = props.currencyToUpdate === undefined
  const title = isNew ? "Add new Currency" : `Update Currency ${props.currencyToUpdate?.code}`
  
  return <Dialog 
    title={title}
    show={props.show} 
    confirmClick={function (): void {
      throw new Error("Function not implemented.")
    } } 
    cancelClick={function (): void {
      throw new Error("Function not implemented.")
    } } >

<div>
    isAdd: {isNew}

    AAAA
    </div>
  </Dialog>
}

export default UpdateCurrencyDialog