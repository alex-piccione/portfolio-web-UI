import React from "react"
import { Company } from "../providers/providerBase"


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
                <tr>
                    <td>{company.Name}</td>
                    <td>{company.Types.map(t => <span>{t}</span>)}</td>
                </tr>
                )}
            </tbody>
        </table>
    }
}

export default CompaniesTable