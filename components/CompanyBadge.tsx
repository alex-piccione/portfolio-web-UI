import { FC } from "react"
import { Company } from "../Entities"

export const CompanyNameBadge = (props:{company:string}) =>   
  <span className="badge rounded-pill bg-primary" style={{marginRight:".5em"}}>{props.company}</span>

export const CompanyNameBadges = (props:{companyIds:string[]}) =>   
  <>{props.companyIds.map(company => 
    <span key={company} className="badge rounded-pill bg-primary" style={{marginRight:".5em"}}>{company}</span>
  )}</>

const CompanyBadge:FC<{company:Company}> = (props) =>
  // TODO: add icon
  // TOdO: set the  color based on types
  <span className="badge rounded-pill bg-primary" style={{marginRight:".5em"}}>{props.company.name}</span>

export const renderCompanies = (companies:string[]) => {
  companies.map(c => <CompanyNameBadge key={c} company={c} />)
}

export default CompanyBadge