import React, { useEffect, useState } from "react"
import { DefaultPage } from "../components/layouts"
import CompaniesTable from "../components/CompaniesTable"
import { Company } from "../Entities"
import Spinner from "../components/Spinner"
import { NextPageContext } from "next"
import { Api} from "../api interfaces/Api"
import TextButton from "../components/controls/TextButton"
import UpdateCurrencyDialog from "../components/dialogs/UpdateCompanyDialog"

export default function Page(props:NextPageContext) {
  const [companies, setCompanies] = useState<Company[]>()
  const [error, setError] = useState<string>()
  const [updateCompanyDialogOpen, setUpdateCompanyDialogOpen] = useState(false)

  const reload = async () => {
    setError(undefined)
    const result = await Api.Company.getCompanies()    
    result.isSuccess ? setCompanies(result.data) : setError(result.error)
  }

  useEffect(() => {
    reload()
  }, [])

  const updateCompanyDialogClose = (addedOrUpdated:boolean) => {
    addedOrUpdated && reload()
    setUpdateCompanyDialogOpen(false)
  }

  return <DefaultPage title="Companies">
    <p>
        Banks, Exchanges and other similar entities where you can store funds.
    </p>    
    
    { error ? <div className="error-on-load" onClick={reload}>Failed to load companies.<br/>{error}</div> :
      companies ? <CompaniesTable companies={companies} /> :
      <Spinner />}

    <TextButton onClick={() => {setUpdateCompanyDialogOpen(true)}}>Add a Company</TextButton>
    <UpdateCurrencyDialog   
      show={updateCompanyDialogOpen}   
      companyToUpdate={undefined}
      onClose={updateCompanyDialogClose}
    />
    
  </DefaultPage>  
}