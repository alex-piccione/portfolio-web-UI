import React, { useEffect, useState } from "react"

import { DefaultPage } from "../components/layouts"
import CompaniesTable from "../components/Companies"
import CompanyProvider from "../providers/compnayProvider"
import { Company } from "../components/entities"


export default function Page() {

    const [companies, setCompanies] = useState<Company[]>([])

    useEffect(() => {
        console.log("useEffect")
        CompanyProvider.getCompanies().then(result => {
            setCompanies(result)
        })

    }, [])

    return <DefaultPage title="Companies">
        <p>
            Banks, Exchanges and other similar entities where you can store funds.
        </p>

        <CompaniesTable companies={companies}></CompaniesTable>
    </DefaultPage>  
}