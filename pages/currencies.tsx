import React, { useState } from "react"
import CurrenciesTable from "../components/CurrenciesTable"
import { Currency } from "../components/entities"
import { DefaultPage } from "../components/layouts"
import Spinner from "../components/Spinner"
import { useMountEffect } from "../common/hooks"
import styles from "../CSS/styles.module.sass"
import { parseApiError } from "../common/pages"
import { Button } from "react-bootstrap"
import UpdateCurrencyDialog from "../components/dialogs/UpdateCurrencyDialog"

export default function Page() {
  const [currencies, setCurrencies] = useState<Currency[]>()
  const [error, setError] = useState<string>()

  function loadCurrencies () {
    setError(undefined)
    fetch("/api/currencies").then(res => {
      if (res.ok) {
        res.json()
          .then(data => setCurrencies(data))
          .catch(error => setError(`${error}`))
      }
      else
        parseApiError(res, setError)        
    })
    .catch(error => setError(`Oh My God! ${error}`))
  }

  useMountEffect(loadCurrencies)
  const [updateCurrencyDialogOpen, setUpdateCurrencyDialogOpen] = useState(false)

  const updateCurrencyDialogClose = (addedOrUpdated:boolean) => {
      if (addedOrUpdated) {
        alert("refresh")
        loadCurrencies()
      }
      else
      {
        alert("nothing changed")
      }
  }

  return <DefaultPage title="Currencies">
    <p>Fiat and Crypto currencies.</p>   
    <div className={styles.section}>
      { error ? <div className="error-on-load" onClick={loadCurrencies}>Failed to load currencies.<br/>{error}</div> :
      currencies ? <CurrenciesTable currencies={currencies} /> : <Spinner/>}
    </div>
      
      <Button onClick={() => {setUpdateCurrencyDialogOpen(true)}}>Add a currency</Button>
      <UpdateCurrencyDialog   
        show={updateCurrencyDialogOpen}   
        currencyToUpdate={undefined}
        onClose={updateCurrencyDialogClose}
      ></UpdateCurrencyDialog>

  </DefaultPage> 
}