import { FC } from "react"
import {CompanyType} from "../../entities"

const CompanyTypeSelector:FC = () => {
  
  

  return <>
  <Form.Control typ></Form.Control>
  CompanyType.values().map(type => <option key={type} value={type}>{type}</option>)
  </>
}




export default CompanyTypeSelector