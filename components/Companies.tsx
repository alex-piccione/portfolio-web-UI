import React from "react"
import { Company } from "./entities"

type Props = {
    companies: Company[]
}

class CompaniesTable extends React.Component<Props> {

    //useEffect

    render() {
        const {companies} = this.props

        return <table>
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
                    <td>{company.Types.map(t => <span key={t}>{t}</span>)}</td>
                </tr>
                )}
            </tbody>
        </table>
    }
}

export default CompaniesTable