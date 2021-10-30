import React from "react"

import { DefaultPage } from "../components/layouts"
import CompaniesTable from "../components/Companies"


export default function Page() {
    return <DefaultPage title="Companies">
        <p>
            Banks, Exchanges and other similar entities where you can store funds.
        </p>

        <CompaniesTable companies={[{Id:"aa", Name:"Test", "Types":["bank"]}]}></CompaniesTable>
    </DefaultPage>    
}