import { FC } from "react"
import { Company } from "./entities"

export const CompanyNameBadge:FC<string> = (company) =>
  <span className="badge rounded-pill" style={{marginRight:".5em"}}>{company}</span>

export const CompanyNameBadge2 = (props:{company:string}) => 
  <span className="badge rounded-pill" style={{marginRight:".5em"}}>{props.company}</span>

const CompanyBadge:FC<Company> = (company) =>
  // TODO: add icon
  <span className="badge rounded-pill" style={{marginRight:".5em"}}>{company.Name}</span>

export default CompanyBadge