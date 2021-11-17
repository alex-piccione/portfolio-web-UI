import React, { useState } from "react"
import { Button, Modal, Form, Row, Col } from "react-bootstrap"
/*import { FundUpdate } from "../../containers/BalanceContainer"*/
import {CompanyNameBadges, renderCompanies} from "../CompanyBadge"
import { Fund, FundUpdate } from "../entities"
import Icon from "../Icon"

const AddFundDialog = (props:{date: Date, fund:Fund, save:(update:FundUpdate) => void}) => {
  const {date, fund, save} = props
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const [quantity, setQuantity] = useState(fund.quantity)

  const saveClick = () => {
    const update:FundUpdate = {
      date: date,
      currencyCode: fund.currencyCode,
      quantity: quantity,
      companyIds: fund.companies.map(c => c.id)
     }

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
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="5">Date</Form.Label>
            <Col sm="7">
              <Form.Control plaintext readOnly defaultValue={new Date(date).toLocaleDateString()} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="5">Currency</Form.Label>
            <Col sm="7">
              <Form.Control plaintext readOnly defaultValue={fund.currencyCode} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="5">Companies</Form.Label>
            <Col sm="7">
              <CompanyNameBadges companyIds={fund.companies.map(c => c.name)} />
            </Col>
          </Form.Group>
        </Form>
        <Form.Group as={Row}>
            <Form.Label column sm="5">Currency</Form.Label>
            <Col sm="7">
              <Form.Control type="number" defaultValue={quantity} onChange={e => setQuantity(Number.parseFloat(e.target.value))} />
            </Col>
          </Form.Group>
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