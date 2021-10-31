import React, { useEffect, useState } from "react"
import { GetServerSideProps } from "next"

import { DefaultPage } from "../components/layouts"
import CompaniesTable from "../components/Companies"
import CompanyProvider from "../providers/compnayProvider"
import { Company } from "../components/entities"
import axios from "axios"
import useSWR from "swr"

const fetchCompanies = (url) => fetch(url).then(res => res.json())

export default function Page(props) {

  const {data:companies, error} = useSWR("/api/companies", fetchCompanies)

  //const [companies, setCompanies] = useState<Company[]>([])  

  /*useEffect(() => {
    console.log("useEffect")

    CompanyProvider.getCompanies().then(result => {
        setCompanies(result)
    })

  }, [])*/

  return <DefaultPage title="Companies">
    <p>
        Banks, Exchanges and other similar entities where you can store funds.
    </p>
    
    {error && <div className="error-on-load">Failed to load companies</div>}
    {companies && <CompaniesTable companies={companies}></CompaniesTable>}
  </DefaultPage>  
}

/*Page.getInitialProps = async () => {    
  const {data} = await axios.get("/api/companies")
  return {props: data}
}*/

/*export const getServerSideProps:GetServerSideProps = async () => {  
  const {data} = await axios.get("/api/companies")
  return {props: data}
}*/