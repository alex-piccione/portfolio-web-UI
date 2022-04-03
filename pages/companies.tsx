import React, { useEffect, useState } from "react"
import { NextPageContext } from "next"
import { DefaultPage } from "../components/DefaultPage"
import SpinnerContainer from "../containers/SpinnerContainer"
import Panel from "../components/Panel"
import TextButton from "../components/controls/TextButton"
import CompaniesTable from "../components/tables/CompaniesTable"
import UpdateCurrencyDialog from "../components/dialogs/UpdateCompanyDialog"

import { Company } from "../Entities"
import { Api} from "../api interfaces/Api"

import { Styles } from "../components/styles"
import homeStyles from '../CSS/Home.module.sass'

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

  return <DefaultPage 
    title="Companies" 
    description="Banks, Exchanges and other similar entities where you can store funds.">
    
    <div className={homeStyles.main}>  

    <Panel fluid>
    { error ? <div className="error-on-load" onClick={reload}>Failed to load companies.<br/>{error}</div> :
    <SpinnerContainer isLoading={companies === undefined}>
      {companies && <CompaniesTable companies={companies} /> }
      </SpinnerContainer>}

    <TextButton onClick={() => {setUpdateCompanyDialogOpen(true)}}>Add a Company</TextButton>

    </Panel>

    </div>
    
    <UpdateCurrencyDialog   
      show={updateCompanyDialogOpen}   
      companyToUpdate={undefined}
      onClose={updateCompanyDialogClose}
    />
    
  </DefaultPage>  
}