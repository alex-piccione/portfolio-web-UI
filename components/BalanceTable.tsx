import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import Alert from "./Alert"
import CompanyBadge, { CompanyNameBadge } from "./CompanyBadge"
import { Balance } from "./entities"
import Spinner from "./Spinner"

const baseCurrency = "EUR"

const getBalance = async (setBalance, setError) => {
  /* axios usage example: https://stackoverflow.com/questions/52766608/how-to-retrieve-data-from-reactjs-and-api */
  await axios.get(`/api/balance?base-currency=${baseCurrency}`)
    .then(response => setBalance(response.data))
    .catch(error => {
      setError(error?.response?.data?.error || `${error}`)
  });
}

export const BalanceTable = () => {

  const [balance, setBalance] = useState<Balance>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>(undefined)

  const loadBalance = () => {
    setLoading(true)   
    getBalance(setBalance, setError).then(_ => setLoading(false))
  }

  useEffect(() => loadBalance(), [])

  const renderCompanies = (companies:{id:string, name:string}[]) => companies.map(company => 
    <CompanyNameBadge key={company.id} company={company.name} />
    )  

  return loading ? <Spinner /> :
    error ? <Alert error={error} /> :
    <table className="table table-stripped">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Quantity</th>
          <th>Companies</th>
        </tr>
      </thead>
      <tbody>
      {balance && balance.fundsByCurrency.map(fund => 
        <tr key={fund.currencyCode}>
          <td>{fund.currencyCode}</td>
          <td>{fund.amount}</td>
          <td>{renderCompanies(fund.companies)}</td>
        </tr>
        )}
      </tbody>
    </table>    
}

export default BalanceTable