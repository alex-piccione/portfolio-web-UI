import React, { FC, useEffect, useState } from "react"
import { Form, Row, Col, Button, Stack } from "react-bootstrap"
import DatePicker from "../controls/DatePicker"
import Dialog from "./Dialog"
import { ValidationRow } from "../forms/utils"
import { Company, Currency, Fund, FundUpdate } from "../../Entities"
import UpdateCompanyDialog from "./UpdateCompanyDialog"
import { Api } from "../../api interfaces/Api"
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
  const [isSaving, setIsSaving] = useState(false)
  const [validationError, setValidationError] = useState<string>()
  const [error, setError] = useState<string>()
  const title = `Update fund ${fund ? `for ${currency}` : ""}`

  const [currencies, setCurrencies] = useState<Currency[]>()  
  const [companies, setCompanies] = useState<Company[]>()  

  const [updateCompanyyDialogOpen, setUpdateCompanyyDialogOpen] = useState(false)

  useEffect(() => {
    Api.Currency.getCurrencies().then(result => setCurrencies(result.data))
    Api.Company.getCompanies().then(result => setCompanies(result.data))
  }, [])

  const clearErrors = () => { setValidationError(undefined); setError(undefined) }

  const saveClick = async () => {       
    clearErrors() 
    if (!currency) return setValidationError("Currency is required")
    if (!companyId) return setValidationError("Company is required")
    if (quantity <= 0) return setValidationError("Quantity must be greater than zero")
    
    const update:FundUpdate = {
      date: date,
      currencyCode: currency,
      quantity: quantity,
      companyId: companyId
    }

    setIsSaving(true)
    const result = await Api.Balance.updateBalance(update)
    setIsSaving(false)
    
    if (result.isSuccess) { 
      close(true)
      showNotification(`Fund ${currency} updated`, "success")
    }
    else
      setError(result.error)
  }

  const updateCompanyDialogClose = (addedOrUpdated:boolean) => {
    if (addedOrUpdated) {
      Api.Company.getCompanies().then(result => setCompanies(result.data))
    }
    setUpdateCompanyyDialogOpen(false)
  }

  return <>     
  <Dialog
    title={title}
    confirmButtonText="Update fund"
    confirmClick={saveClick}
    confirmDisabled={isSaving}
    cancelClick={() => close(false)}    
    isBusy={isSaving}
  >
    <Form onChange={clearErrors}>
      <ValidationRow validationError={validationError} error={error} />
      <Form.Group as={Row}>
        <Form.Label column sm="5">Date</Form.Label>
        <Col sm="7">
          <DatePicker onChange={(date) => setDate(date)} className="form-control" />
        </Col>
      </Form.Group>
      {!fund &&
      <Form.Group as={Row}>
        <Form.Label column sm="5">Currency</Form.Label>
        <Col sm="7">
          <Stack direction="horizontal" gap={1}>      
            <Form.Select className="form-select-sm" onChange={e => setCurrency(e.target.value)} >
              <option key="0" value="">Select a currency</option>
              {currencies && currencies.map(currency => <option key={currency.code} value={currency.code}>{currency.code} - {currency.name}</option>)}
            </Form.Select>
          </Stack>
        </Col>
      </Form.Group>
      }
      <Form.Group as={Row}>
        <Form.Label column sm="5">Company</Form.Label>
        <Col sm="7">
          <Stack direction="horizontal" gap={1}>
            <Form.Select className="form-select-sm" onChange={e => setCompanyId(e.target.value)} >
              <option key="0" value="">Select a Company</option>
              {companies && companies.map(company => <option key={company.id} value={company.id}>{company.name}</option>)}
            </Form.Select> 
            <Button variant="outline-secondary" size="sm" onClick={() => setUpdateCompanyyDialogOpen(true)}>New</Button>       
          </Stack>
        </Col>
      </Form.Group>        
      <Form.Group as={Row}>
        <Form.Label column sm="5">Quantity</Form.Label>
        <Col sm="7">
          <Form.Control type="number" defaultValue={quantity} onChange={e => setQuantity(parseFloat(e.target.value))} />
        </Col>
      </Form.Group>
    </Form>    
  </Dialog>
 
  <UpdateCompanyDialog   
    show={updateCompanyyDialogOpen}   
    companyToUpdate={undefined}
    onClose={updateCompanyDialogClose}
  />
  </>
}

export default UpdateFundDialog