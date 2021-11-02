import React, { useEffect, useState } from "react"

import { DefaultPage } from "../components/layouts"
import CompaniesTable from "../components/Companies"
import { Company } from "../components/entities"

const fetchCompanies = () => fetch("/api/companies")

const parseApiError = (response, setError) => {
  response.json()
    .then(msg => setError(`${response.statusText} - ${msg.error??String(msg)}`))
    .catch(err => setError(`${response.statusText} - Failed to parse error. ${err}`))
}
   
export default function Page(props) {

  //const {data:companies, error} = useSWR("/api/companies", fetchCompanies)

  const [companies, setCompanies] = useState<Company[]>([])
  const [error, setError] = useState<string>(undefined)

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
        parseApiError(res, setError) //`${res.statusText} - ${res.text().}`)         
    })
    .catch(error => setError(`Oh My God! ${error}`))
/*
    fetchCompanies().then(data => {
      setError(undefined)
      setCompanies(data)
    })
    .catch(error => setError(`Oh My God! ${error}`))*/
  }

  useEffect(() => {
    reload()
  }, [])

  return <DefaultPage title="Companies">
    <p>
        Banks, Exchanges and other similar entities where you can store funds.
    </p>
    
    {error && <div className="error-on-load">Failed to load companies.<br/>{error}</div>}
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