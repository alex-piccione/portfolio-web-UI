import { ChangeEvent, FC, useState } from "react"
import { Currency } from "../entities"
import Dialog from "./Dialog"
import { saveCurrency } from "../../api interfaces/CurrenciesApi"
import { Col, Form, Row } from "react-bootstrap"
import { ValidationRow } from "../forms/utils"

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
  const title = isNew ? "Create Currency" : `Update Currency ${props.currencyToUpdate?.code}`
  const confirmButtonText = isNew ? "Create new Currency" : "Update Currency"
  const [validationError, setValidationError] = useState("")

  const initialData = {
    code: props.currencyToUpdate?.code || "",
    name: props.currencyToUpdate?.name || "",
  }  

  const [data, setData] = useState<FormValues>(initialData)
  
  const resetForm = () => { setData(initialData); setValidationError("") }
  const setValue = (field: keyof FormValues, e: ChangeEvent<any>) => setData({...data, [field]: e.target.value})
  
  const save = () => {
    if (data.code.trim() === "") return setValidationError("Code is mandatory")
    if (data.name.trim() === "") return setValidationError("Name is mandatory")
    
    saveCurrency(data).then(() => {
      resetForm()
      props.onClose(true)
    })
    .catch(error => { setValidationError(`${error}`) })
  }
  
  return props.show ? <Dialog 
    title={title}
    confirmButtonText={confirmButtonText}
    confirmClick={save}
    cancelClick={() =>  {props.onClose(false); resetForm() } }>
    <Form>
      <ValidationRow validationError={validationError} />
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
  </Dialog> : null
}

export default UpdateCurrencyDialog