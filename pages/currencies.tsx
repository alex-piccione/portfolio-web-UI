import React, { useEffect, useState } from "react"
import CurrenciesTable from "../components/CurrenciesTable"
import { Currency } from "../components/entities"
import { DefaultPage } from "../components/layouts"
import Spinner from "../components/Spinner"

export default function Page() {
  const [currencies, setCurrencies] = useState<Currency[]>(undefined)
  const [error, setError] = useState<string>(undefined)

  const parseApiError = (response, setError) => {
    response.json()
      .then(msg => setError(`${response.statusText} - ${msg.error??String(msg)}`))
      .catch(err => setError(`${response.statusText} - Failed to parse error. ${err}`))
  }

  const loadCurrencies = () => {
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

  useEffect(() => loadCurrencies(), [])

  return <DefaultPage title="Currencies">
    <p>Fiat and Crypto currencies.</p>    
    { error ? <div className="error-on-load" onClick={loadCurrencies}>Failed to load currencies.<br/>{error}</div> :
    currencies ? <CurrenciesTable currencies={currencies} /> : <Spinner/>}
    
  </DefaultPage> 
}