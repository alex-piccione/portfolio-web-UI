import React, { useState } from "react"
import CurrenciesTable from "../components/CurrenciesTable"
import { Currency } from "../Entities"
import { DefaultPage } from "../components/layouts"
import Spinner from "../components/Spinner"
import { useMountEffect } from "../common/hooks"
import styles from "../CSS/styles.module.sass"
import UpdateCurrencyDialog from "../components/dialogs/UpdateCurrencyDialog"
import TextButton from "../components/controls/TextButton"
import { Api } from "../api interfaces/Api"

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

  return <DefaultPage title="Currencies">
    <p>Fiat and Crypto currencies.</p>   
    <div className={styles.section}>
      { error ? <div className="error-on-load" onClick={loadCurrencies}>Failed to load currencies.<br/>{error}</div> :
      currencies ? <CurrenciesTable currencies={currencies} /> : <Spinner/>}
    </div>
      
    <TextButton onClick={() => {setUpdateCurrencyDialogOpen(true)}}>Add a currency</TextButton>
    <UpdateCurrencyDialog   
      show={updateCurrencyDialogOpen}   
      currencyToUpdate={undefined}
      onClose={updateCurrencyDialogClose}
    ></UpdateCurrencyDialog>

  </DefaultPage> 
}