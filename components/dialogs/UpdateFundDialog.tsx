import React, { FC, useEffect, useState } from "react"
import { Button, Modal, Form, Row, Col } from "react-bootstrap"
import DatePicker from "../controls/DatePicker"
import { Company, Currency, Fund, FundUpdate } from "../entities"
import currenciesApi from "../../api interfaces/CurrenciesApi"
import { getCompanies } from "../../api interfaces/CompaniesApi"
import Dialog from "./Dialog"
import { ValidationRow } from "../forms/utils"

export interface UpdateFundDialogProps {
  initialDate?: Date | undefined,
  fund:Fund | undefined,
  save:(update:FundUpdate) => void,
  close:() => void
}

const UpdateFundDialog:FC<UpdateFundDialogProps> = (props) => {
  const {initialDate, fund, save, close} = props
  const [date, setDate] = useState(initialDate||new Date())
  const [currency, setCurrency] = useState( (fund && fund.currencyCode) || undefined)
  const [quantity, setQuantity] = useState(fund && fund.quantity || 0)
  const [companyId, setCompanyId] = useState( (fund && fund.companies[0].id) || undefined)
  const [validationError, setValidationError] = useState<string|undefined>(undefined)
  const title = `Update fund ${fund ? `for ${currency}` : ""}`

  const [currencies, setCurrencies] = useState<Currency[]>()  
  const [companies, setCompanies] = useState<Company[]>()  
  useEffect(() => {
    currenciesApi.getCurrencies().then(result => setCurrencies(result.data))
    getCompanies().then(setCompanies)
  }, [])

  const showValidationError = (message:string) => setValidationError(message)
  const hideValidationError = () => setValidationError(undefined)

  const saveClick = () => {
    if (!currency) return showValidationError("Currency is required")
    if (!companyId) return showValidationError("Company is required")

    const update:FundUpdate = {
      date: date,
      currencyCode: currency,
      quantity: quantity,
      companyId: companyId
     }

    save(update)
    close()
  }

  return <>   
  <Dialog
    title={title}
    confirmButtonText="Update fund"
    confirmClick={saveClick}
    cancelClick={close}
  >
    <Form>
      <ValidationRow validationError={validationError} />
      <Form.Group as={Row}>
        <Form.Label column sm="5">Date</Form.Label>
        <Col sm="7">
          <DatePicker onChange={(date) => {setDate(date); hideValidationError()}} className="form-control" />
        </Col>
      </Form.Group>
      {!fund &&
      <Form.Group as={Row}>
        <Form.Label column sm="5">Currency</Form.Label>
        <Col sm="7">
          <Form.Select className="form-select-sm" onChange={e => {setCurrency(e.target.value); hideValidationError()}} >
            {currencies ? 
            [
              <option key="0" value="">Select currency</option>,
            ...currencies.map(currency => <option key={currency.code} value={currency.code}>{currency.code} - {currency.name}</option>)] :
            <option>Loading currencies...</option>}                
          </Form.Select>
        </Col>
      </Form.Group>
      }
      <Form.Group as={Row}>
        <Form.Label column sm="5">Company</Form.Label>
        <Col sm="7">
          <Form.Select className="form-select-sm" onChange={e => { setCompanyId(e.target.value); hideValidationError()}} >
            {companies ? 
            companies.map(company => <option key={company.id} value={company.id}>{company.name}</option>) :
            <option>Loading companies...</option>}
          </Form.Select>         
        </Col>
      </Form.Group>        
      <Form.Group as={Row}>
        <Form.Label column sm="5">Quantity</Form.Label>
        <Col sm="7">
          <Form.Control type="number" defaultValue={quantity} onChange={e => {setQuantity(parseFloat(e.target.value)); hideValidationError()}} />
        </Col>
      </Form.Group>
    </Form>    
  </Dialog>
  </>
}

export default UpdateFundDialog