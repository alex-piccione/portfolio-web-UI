import React, { FC, useEffect, useState } from "react"
import { Form, Row, Col } from "react-bootstrap"
import DatePicker from "../controls/DatePicker"
import Dialog from "./Dialog"
import { ValidationRow } from "../forms/utils"
import { Company, Currency, Fund, FundUpdate } from "../entities"
import companiesApi from "../../api interfaces/CompaniesApi"
import balanceApi from "../../api interfaces/BalanceApi"
import currenciesApi from "../../api interfaces/CurrenciesApi"
import { useNotifications } from "../../containers/Notifications"

export interface UpdateFundDialogProps {
  initialDate?: Date | undefined,
  fund:Fund | undefined,
  close:(shouldReload:boolean) => void
}

const UpdateFundDialog:FC<UpdateFundDialogProps> = (props) => {
  const {initialDate, fund, close} = props  
  const { showNotification } = useNotifications()

  const [date, setDate] = useState(initialDate||new Date())
  const [currency, setCurrency] = useState( (fund && fund.currencyCode) || undefined)
  const [quantity, setQuantity] = useState<number>(0)
  const [companyId, setCompanyId] = useState<string>()
  const [validationError, setValidationError] = useState<string>()
  const [error, setError] = useState<string>()
  const title = `Update fund ${fund ? `for ${currency}` : ""}`

  const [currencies, setCurrencies] = useState<Currency[]>()  
  const [companies, setCompanies] = useState<Company[]>()  
  useEffect(() => {
    currenciesApi.getCurrencies().then(result => setCurrencies(result.data))
    companiesApi.getCompanies().then(result => setCompanies(result.data))
  }, [])

  const hideValidationError = () => setValidationError(undefined)

  const saveClick = async () => {   
    hideValidationError() 
    if (!currency) return setValidationError("Currency is required")
    if (!companyId) return setValidationError("Company is required")
    if (quantity <= 0) return setValidationError("Quantity must be greater than zero")
    
    const update:FundUpdate = {
      date: date,
      currencyCode: currency,
      quantity: quantity,
      companyId: companyId
    }

    const result = await balanceApi.updateBalance(update)
    setError(result.isSuccess ? undefined : result.error)
    if (result.isSuccess) { 
      close(true)
      showNotification(`Fund ${currency} updated`, "success")
    }
  }

  return <>     
  <Dialog
    title={title}
    confirmButtonText="Update fund"
    confirmClick={saveClick}
    cancelClick={() => close(false)}
  >
    <Form>
      <ValidationRow validationError={validationError} error={error} />
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
            <option key="0" value="">Select a currency</option>
            {currencies && currencies.map(currency => <option key={currency.code} value={currency.code}>{currency.code} - {currency.name}</option>)}
          </Form.Select>
        </Col>
      </Form.Group>
      }
      <Form.Group as={Row}>
        <Form.Label column sm="5">Company</Form.Label>
        <Col sm="7">
          <Form.Select className="form-select-sm" onChange={e => { setCompanyId(e.target.value); hideValidationError()}} >
            <option key="0" value="">Select a company</option>
            {companies && companies.map(company => <option key={company.id} value={company.id}>{company.name}</option>)}
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