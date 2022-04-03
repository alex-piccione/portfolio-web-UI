import React, { useState } from "react"
import CurrenciesTable from "../components/tables/CurrenciesTable"
import { Currency } from "../Entities"
import { DefaultPage } from "../components/DefaultPage"
import Spinner from "../components/Spinner"
import { useMountEffect } from "../common/hooks"
import styles from "../CSS/styles.module.sass"
import UpdateCurrencyDialog from "../components/dialogs/UpdateCurrencyDialog"
import TextButton from "../components/controls/TextButton"
import { Api } from "../api interfaces/Api"
import Panel from "../components/Panel"
import SpinnerContainer from "../containers/SpinnerContainer"

export default function Page() {
  const [currencies, setCurrencies] = useState<Currency[]>()
  const [error, setError] = useState<string>()
  //const [isLoading, setIsLoading] = useState(false) ]

  const loadCurrencies = async () => {
    setError(undefined)
    const result = await Api.Currency.getCurrencies()
    result.isSuccess ? setCurrencies(result.data) : setError(result.error)
  }
  
  useMountEffect(() => { loadCurrencies() })
  const [updateCurrencyDialogOpen, setUpdateCurrencyDialogOpen] = useState(false)

  const updateCurrencyDialogClose = (addedOrUpdated:boolean) => {
    setUpdateCurrencyDialogOpen(false)
    if (addedOrUpdated) {
      loadCurrencies()
    }
  }

  return <DefaultPage 
    title="Currencies"
    description="Fiat and Crypto currencies.">  
    <Panel>
      { error ? <div className="error-on-load" onClick={loadCurrencies}>Failed to load currencies.<br/>{error}</div> :
      <SpinnerContainer isLoading={currencies === undefined}>
        {currencies && <>
          <CurrenciesTable currencies={currencies} />
          <TextButton onClick={() => {setUpdateCurrencyDialogOpen(true)}}>Add a currency</TextButton>
          </>}
      </SpinnerContainer>}
    </Panel>    

    <UpdateCurrencyDialog   
      show={updateCurrencyDialogOpen}   
      currencyToUpdate={undefined}
      onClose={updateCurrencyDialogClose}
    />
  </DefaultPage> 
}