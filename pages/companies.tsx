import React, { useEffect, useState } from "react"
import { DefaultPage } from "../components/layouts"
import CompaniesTable from "../components/CompaniesTable"
import { Company } from "../Entities"
import Spinner from "../components/Spinner"
import { NextPageContext } from "next"
import { parseApiError } from "../common/pages"

// todo: use axios instead of fetch to avoid checking .ok and have a better management of timeout ?
const fetchCompanies = () => fetch("/api/companies")

export default function Page(props:NextPageContext) {

  const [companies, setCompanies] = useState<Company[]>()
  const [error, setError] = useState<string>()

  const reload = () => {
    console.log(`reload`)

    setError(undefined)
    fetchCompanies().then(res => {
      if (res.ok) {
        res.json()
          .then(data => setCompanies(data))
          .catch(error => setError(`${error}`))
      }
      else
        parseApiError(res, setError)       
    })
    .catch(error => setError(`Oh My God! ${error}`))
  }

  useEffect(() => {
    reload()
  }, [])

  return <DefaultPage title="Companies">
    <p>
        Banks, Exchanges and other similar entities where you can store funds.
    </p>    
    
    { error ? <div className="error-on-load" onClick={reload}>Failed to load companies.<br/>{error}</div> :
      companies ? <CompaniesTable companies={companies} /> :
      <Spinner />}
    
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