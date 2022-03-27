import { ChangeEvent, FC, useState } from "react"
import { Company, CompanyType } from "../entities"
import Dialog from "./Dialog"
import { Col, Form, Row } from "react-bootstrap"
import { ValidationRow } from "../forms/utils"
import Spinner from "../Spinner"
import companiesApi from "../../api interfaces/CompaniesApi"
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
    //id: props.companyToUpdate?.code || "",
    name: props.companyToUpdate?.name || "",
    types: props.companyToUpdate?.types || [],
  }  

  const [data, setData] = useState<FormValues>(initialData)
  const [isSaving, setIsSaving] = useState(false)
  
  const resetForm = () => { setData(initialData); setValidationError(undefined); setOperationError(undefined) }
  const setValue = (field: keyof FormValues, e: ChangeEvent<any>) => setData({...data, [field]: e.target.value})
  const cleanErrors = () => { setValidationError(undefined); setOperationError(undefined) }

  const types = CompanyType.
  
  const save = async () => {   
    cleanErrors() 
    if (data.name.trim() === "") return setValidationError("Name is mandatory")
    if (data.types.length == 0) return setValidationError("At  least a Type is required")

    setIsSaving(true)
    const result = await companiesApi.saveCompany(data)
    setIsSaving(false)

    if(result.isSuccess) {
      resetForm()
      props.onClose(true)
      showNotification(isNew ? "Company saved" : "Company updated", "success")
    } else setOperationError(result.error)
  }
  
  return props.show ? <Dialog 
    title={title}
    confirmButtonText={confirmButtonText}
    confirmDisabled={isSaving}
    confirmClick={save}
    cancelClick={() => {props.onClose(false); resetForm() } }>
      {isSaving ? <Spinner type="Spin" /> :
    
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
          <Form.Select className="form-select-sm" onChange={e => { setCompanyType(e.target.value); cleanErrors()}} >
            <option key="0" value="">Select a company</option>
            {CompanyType.values().map(type => <option key={type} value={type}>{type}</option>)}
          </Form.Select>  
        </Col>
      </Form.Group>    </Form>}
  </Dialog> : null
}

export default UpdateCurrencyDialog