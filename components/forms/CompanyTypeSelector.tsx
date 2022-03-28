import { FC, useState } from "react"
import { Form } from "react-bootstrap"
import {CompanyTypes} from "../../Entities"

const CompanyTypeSelector:FC = () => {
  
  //const values = keyof<CompanyType>
  //const values = [k in CompanyType]

  //useState()

  return <>
  <Form.Select>
{
  CompanyTypes.map(type => <option key={type} value={type}>{type}</option>)
}
  </Form.Select>
  
  </>
}




export default CompanyTypeSelector