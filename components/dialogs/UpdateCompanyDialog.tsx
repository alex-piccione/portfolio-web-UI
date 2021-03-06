import { ChangeEvent, FC, useState } from "react"
import Dialog from "./Dialog"
import { Col, Form, Row } from "react-bootstrap"
import { ValidationRow } from "../forms/utils"
import { Company, CompanyTypes } from "../../Entities.d"
import { Api } from "../../api interfaces/Api"
import { useNotifications } from "../../containers/Notifications"

interface Props {
  show: boolean
  companyToUpdate:Company|undefined
  onClose: (addedOrUpdated:boolean) => void
}

interface FormValues {  
  name:string,
  types:string[],
}

const UpdateCurrencyDialog: FC<Props> = props => {
  const isNew = props.companyToUpdate === undefined
  const {showNotification } = useNotifications()
  const title = isNew ? "Create a new Company" : `Update Company ${props.companyToUpdate?.name}`
  const confirmButtonText = isNew ? "Create Company" : "Update Compnay"
  const [validationError, setValidationError] = useState<string>()
  const [operationError, setOperationError] = useState<string>()

  const initialData = {
    id: props.companyToUpdate?.id,
    name: props.companyToUpdate?.name || "",
    types: props.companyToUpdate?.types || [],
  }  

  const [data, setData] = useState<FormValues>(initialData)
  const [isSaving, setIsSaving] = useState(false)
  
  const resetForm = () => { setData(initialData); setValidationError(undefined); setOperationError(undefined) }
  const setValue = (field: keyof FormValues, e: ChangeEvent<any>) => { setData({...data, [field]: e.target.value}) }
  const setValues = (field: keyof FormValues, e: ChangeEvent<HTMLSelectElement>) => { 
    setData({...data, 
      [field]: Array.from(e.target.selectedOptions).map(o => o.value)})
    }
  const cleanErrors = () => { setValidationError(undefined); setOperationError(undefined) }

 
  const save = async () => {   
    cleanErrors() 
    if (data.name.trim() === "") return setValidationError("Name is mandatory")
    if (data.types.length == 0) return setValidationError("At least a Type is required")

    const company:Company = {
      id: props.companyToUpdate?.id || "",
      name: data.name,
      types: data.types,
    }

    setIsSaving(true)
    const result = await Api.Company.saveCompany(company)
    setIsSaving(false)

    if(result.isSuccess) {
      resetForm()
      props.onClose(true)
      showNotification(isNew ? `Company "${company.name}" created` : `Company "${company.name}" updated`, "success")
    } else setOperationError(result.error)
  }
  
  return props.show ? <Dialog 
    title={title}
    confirmButtonText={confirmButtonText}
    confirmDisabled={isSaving}
    confirmClick={save}
    cancelClick={() => {props.onClose(false); resetForm() } }
    isBusy={isSaving}> 
      <Form onChange={() => cleanErrors()}>
        <ValidationRow validationError={validationError} error={operationError} />
        <Form.Group as={Row}>
          <Form.Label column sm="5">Name</Form.Label>
          <Col sm="7">
            <Form.Control type="text" className="form-control" size="sm" defaultValue={data.name} onChange={e => setValue("name", e)} />
          </Col>
        </Form.Group>    
        <Form.Group as={Row}>
          <Form.Label column sm="5">Types</Form.Label>
          <Col sm="7">          
            <Form.Select className="form-select-sm" multiple
              onChange={e => setValues("types", e)}>         
              {CompanyTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </Form.Select>  
          </Col>
        </Form.Group>
      </Form>
  </Dialog> : null
}

export default UpdateCurrencyDialog