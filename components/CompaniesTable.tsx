import React from "react"
import CompanyTypeBadge from "./CompanyTypeBadge"
import { Company } from "./entities"

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
        <tr key={company.Id}>
            <td>{company.Name}</td>
            <td>{company.Types.map(t => <CompanyTypeBadge key={t} companyType={t} /> )}</td>
            <td></td>
        </tr>
        )}
      </tbody>
    </table>
  }
}

export default CompaniesTable