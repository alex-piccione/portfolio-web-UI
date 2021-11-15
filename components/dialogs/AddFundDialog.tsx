import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { Fund } from "../entities"
import Icon from "../Icon"

export interface Update {
  quantity: number
}

const AddFundDialog = (props:{fund:Fund, save:(update:Update) => void}) => {
  const {fund, save} = props
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const [quantity, setQuantity] = useState(fund.amount)

  const saveClick = () => {
    const update:Update = {quantity: quantity }
    save(update)
    close()
  }

  return !isOpen ?
    //<Button variant="otline-secondary" size="sm" onClick={open}><Icon icon="add-record" /> Add</Button> :
    <a onClick={open} style={{cursor: "pointer"}}><Icon icon="add-record" /> Add</a> :
    <Modal show={isOpen} onHide={close}>
      <Modal.Header>
        <Modal.Title>Add fund for <strong>{fund.currencyCode}</strong></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Date: </div>
        <div>Currency: </div>
        <div>Quantity: <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)} /></div>   
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={saveClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
}

export default AddFundDialog