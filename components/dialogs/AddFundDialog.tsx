import React, { useEffect, useState } from "react"
import { Button, Modal, Form, Row, Col } from "react-bootstrap"
import DatePicker from "../controls/DatePicker"
import { getCompanies } from "../../api interfaces/CompaniesApi"

import { Company, Fund, FundUpdate } from "../entities"
import Spinner from "../Spinner"
import TextButton from "../controls/TextButton"

const AddFundDialog = (props:{date: Date, fund:Fund, save:(update:FundUpdate) => void}) => {
  const {date, fund, save} = props
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const [newDate, setNewDate] = useState(date||new Date())
  const [companies, setCompanies] = useState<Company[]>()
  
  useEffect(() => {getCompanies().then(setCompanies)}, [])

  const [quantity, setQuantity] = useState(fund.quantity)
  const [companyId, setCompanyId] = useState(fund.companies[0].id)

  const saveClick = () => {
    const update:FundUpdate = {
      date: newDate,
      currencyCode: fund.currencyCode,
      quantity: quantity,
      companyId: companyId
     }

    save(update)
    close()
  }

  return <>
    <TextButton onClick={open} variant="alternative" >Add</TextButton>  
    <Modal show={isOpen} onHide={close}>
      <Modal.Header>
        <Modal.Title>Add fund for <strong>{fund.currencyCode}</strong></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="5">Date</Form.Label>
            <Col sm="7">             
              <DatePicker onChange={setNewDate} className="form-control" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="5">Currency</Form.Label>
            <Col sm="7">
              <Form.Control readOnly className="form-control" defaultValue={fund.currencyCode} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="5">Companies</Form.Label>
            <Col sm="7">
              { companies ? 
              <Form.Select className="form-select-sm" onChange={(ev) => setCompanyId(ev.target.value)} >
                {companies.map(company => <option key={company.id} value={company.id}>{company.name}</option>)}                
              </Form.Select>
              : <Spinner small />
              }              
            </Col>
          </Form.Group>
        </Form>
        <Form.Group as={Row}>
            <Form.Label column sm="5">Quantity</Form.Label>
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
    </>
}

export default AddFundDialog