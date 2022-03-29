import React from "react"
import CompanyTypeBadge from "./CompanyTypeBadge"
import { Company } from "../Entities"

type Props = {
  companies: Company[]
}

class CompaniesTable extends React.Component<Props> {

  render() {
    const {companies} = this.props

    return <table className="table table-striped">
      <thead>
        <tr>
            <td>Name</td>
            <td>Types</td>
        </tr>
      </thead>
      <tbody>
        {companies && companies.map(company => 
        <tr key={company.id}>
            <td>{company.name}</td>
            <td>{company.types.map(t => <CompanyTypeBadge key={t} companyType={t} /> )}</td>
            <td></td>
        </tr>
        )}
      </tbody>
    </table>
  }
}

export default CompaniesTable