import React from "react"
import CompanyTypeBadge from "../CompanyTypeBadge"
import { Company } from "../../Entities"
import { Table } from "react-bootstrap"

type Props = {
  companies: Company[]
}

class CompaniesTable extends React.Component<Props> {

  render() {
    const {companies} = this.props

    return <Table striped bordered>
      <thead>
        <tr>
            <th>Name</th>
            <th>Types</th>
        </tr>
      </thead>
      <tbody>
        {companies && companies.map(company => 
        <tr key={company.id}>
            <td>{company.name}</td>
            <td>{company.types.map(t => <CompanyTypeBadge key={t} companyType={t} /> )}</td>
        </tr>
        )}
      </tbody>
    </Table>
  }
}

export default CompaniesTable