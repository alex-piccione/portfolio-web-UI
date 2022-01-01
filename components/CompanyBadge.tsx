import { FC } from "react"
import { Company } from "./entities"

export const CompanyNameBadge1:FC<string> = (company) =>
  <span className="badge rounded-pill" style={{marginRight:".5em"}}>{company}</span>

export const CompanyNameBadge = (props:{company:string}) =>   
  <span className="badge rounded-pill bg-primary" style={{marginRight:".5em"}}>{props.company}</span>

export const CompanyNameBadges = (props:{companyIds:string[]}) =>   
  <>{props.companyIds.map(company => 
    <span key={company} className="badge rounded-pill bg-primary" style={{marginRight:".5em"}}>{company}</span>
  )}</>

const CompanyBadge:FC<Company> = (company) =>
  // TODO: add icon
  <span className="badge rounded-pill" style={{marginRight:".5em"}}>{company.Name}</span>

export const renderCompanies = (companies:string[]) => {
  companies.map(c => <CompanyNameBadge company={c} />)
}

export default CompanyBadge