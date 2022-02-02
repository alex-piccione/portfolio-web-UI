import React, { FC, useEffect, useState } from "react"
import { Button, Modal, Form, Row, Col } from "react-bootstrap"
import DatePicker from "../controls/DatePicker"

import { Company, Currency, Fund, FundUpdate } from "../entities"
import Spinner from "../Spinner"
import TextButton from "../controls/TextButton"
import { getCurrencies } from "../../api interfaces/CurrenciesApi"
import { getCompanies } from "../../api interfaces/CompaniesApi"

export interface UpdateFundDialogProps {
  initialDate?: Date | undefined,
  fund:Fund | undefined,
  save:(update:FundUpdate) => void,
  close:() => void
}

const AddOrUpdateFundDialog:FC<UpdateFundDialogProps> = (props) => {
  const {initialDate, fund, save, close} = props
  //const [isOpen, setIsOpen] = useState(false)
  //const open = () => setIsOpen(true)
  //const close = () => setIsOpen(false)
  const [date, setDate] = useState(initialDate||new Date())
  const [currency, setCurrency] = useState( (fund && fund.currencyCode) || undefined)
  const [quantity, setQuantity] = useState(fund && fund.quantity || 0)
  const [companyId, setCompanyId] = useState(fund && fund.companies[0].id || undefined)

  const [currencies, setCurrencies] = useState<Currency[]>()  
  const [companies, setCompanies] = useState<Company[]>()  
  useEffect(() => {
    getCurrencies().then(setCurrencies)
    getCompanies().then(setCompanies)
  }, [])

  const saveClick = () => {
    const update:FundUpdate = {
      date: date,
      currencyCode: currency,
      quantity: quantity,
      companyId: companyId
     }

    save(update)
    close()
  }

  // <TextButton onClick={open} variant="alternative" >Add</TextButton> 

  return <>     
    <Modal show onHide={close}>
      <Modal.Header>
        <Modal.Title>Update fund {fund && (<>for <strong>{currency}</strong></>)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="5">Date</Form.Label>
            <Col sm="7">             
              <DatePicker onChange={setDate} className="form-control" />
            </Col>
          </Form.Group>
          {!fund &&
          <Form.Group as={Row}>
            <Form.Label column sm="5">Currency</Form.Label>
            <Col sm="7">
              { currencies ?
              <Form.Select className="form-select-sm" onChange={(ev) => setCurrency(ev.target.value)} >
                {currencies.map(currency => <option key={currency.Code} value={currency.Code}>{currency.Code} - {currency.Name}</option>)}                
              </Form.Select>
              : <Spinner small />
              }
            </Col>
          </Form.Group>
          }
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

export default AddOrUpdateFundDialog