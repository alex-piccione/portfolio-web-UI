import axios from "axios"
import React, { FC, useEffect, useState } from "react"
import Alert from "./Alert"
import { CompanyNameBadge } from "./CompanyBadge"
import { Balance, FundUpdate } from "./entities"
import Spinner from "./Spinner"
import { Table } from "react-bootstrap"
import AddFundDialog from "./dialogs/AddFundDialog"

const baseCurrency = "EUR"

interface TableProps {
  isLoading:boolean,
  error:string,
  balance:Balance,
  reload: () => void,
  updateFund: (update:FundUpdate) => void
}

const View = (props:TableProps) => {
  const {isLoading, error, balance, reload, updateFund} = props
  const renderCompanies = (companies:{id:string, name:string}[]) => companies.map(company => 
    <CompanyNameBadge key={company.id} company={company.name} />
  )  

  return isLoading ? <Spinner id="balanceTable-spinner"  /> :
    error ? <><Alert error={error} /><div onClick={reload} style={{cursor: "pointer"}}>Ok, reload</div></> :
    <Table striped bordered hover id="balanceTable">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Quantity</th>
          <th>Companies</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {balance && balance.fundsByCurrency.map(fund => 
        <tr key={fund.currencyCode}>
          <td>{fund.currencyCode}</td>
          <td>{fund.quantity}</td>
          <td>{renderCompanies(fund.companies)}</td>
          <td>   
            <AddFundDialog date={balance.date} fund={fund} save={updateFund} />
          </td>
        </tr>
        )}
      </tbody>
    </Table> 
}

export default function() {
  const [balance, setBalance] = useState<Balance>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>(undefined)

  const loadBalance = () => {    
    setLoading(true)       
    getBalance(setBalance, setError).then(_ => setLoading(false))
  }

  const updateFund = async (update:FundUpdate) => {
    await updateBalance(update, setError);
    loadBalance();
  }

  const reload = () => {
    setError(undefined)
    loadBalance()
  }

  useEffect(() => loadBalance(), [])

  const getBalance = async (setBalance, setError) => {
    await axios.get(`/api/balance?base-currency=${baseCurrency}`)
      .then(response => setBalance(response.data))
      .catch(error => {
        setError(error?.response?.data?.error || `${error}`)
    });
  }

  const updateBalance = async (update, setError) => {    
    await axios.post(`/api/balance/update-fund`, update)
      .then(response => alert("fund updated"))
      .catch(error => {
        setError(error?.response?.data?.error || `${error}`)
    });
  }
  
  return <View isLoading={loading} error={error} balance={balance} reload={reload} updateFund={updateFund} />
}
