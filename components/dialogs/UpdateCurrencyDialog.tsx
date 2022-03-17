import { ChangeEvent, FC, useEffect, useRef, useState } from "react"
import { Currency } from "../entities"
import Dialog from "./Dialog"
import { saveCurrency } from "../../api interfaces/CurrenciesApi"
import { Col, Form, FormControlProps, Row } from "react-bootstrap"
import Alert from "../Alert"

interface Props {
  show: boolean
  currencyToUpdate:Currency|undefined
  onClose: (addedOrUpdated:boolean) => void
}

interface FormValues {
  code: string
  name:string
}

const UpdateCurrencyDialog: FC<Props> = props => {
  const isNew = props.currencyToUpdate === undefined
  const title = isNew ? "Add new Currency" : `Update Currency ${props.currencyToUpdate?.code}`
  const [validationError, setValidationError] = useState("")

  const initialData = {
    code: props.currencyToUpdate?.code || "",
    name: props.currencyToUpdate?.name || "",
  }  

  const [data, setData] = useState<FormValues>(initialData)
  
  const resetForm = () => { setData(initialData); setValidationError("") }
  const setValue = (field: keyof FormValues, e: ChangeEvent<any>) => setData({...data, [field]: e.target.value})
  
  const save = () => {

    saveCurrency(data).then(() => {
      resetForm()
      props.onClose(true)
    })
    .catch(error => { setValidationError(`${error}`) })
  }
  

  return <>
  <Dialog 
    title={title}
    show={props.show} 
    confirmClick={save}
    cancelClick={() =>  {props.onClose(false); resetForm() } }>
    <Form>
      <Form.Group as={Row}>
        {validationError && <Alert type="warning">{validationError}</Alert>}
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="5">Code</Form.Label>
        <Col sm="7">
          <Form.Control type="text" className="form-control" defaultValue={data.code} onChange={e => setValue("code", e)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="5">Name</Form.Label>
        <Col sm="7">
          <Form.Control type="text" className="form-control" size="sm" defaultValue={data.name} onChange={e => setValue("name", e)} />
        </Col>
      </Form.Group>    
    </Form>
  </Dialog></>
}

export default UpdateCurrencyDialog