import axios from "axios"
import React, { useState } from "react"
import { Table } from "react-bootstrap"
import styles from  "../CSS/styles.module.sass"
import Alert from "./Alert"
import { CompanyNameBadge } from "./CompanyBadge"
import { Balance, Fund, FundUpdate } from "./entities"
import Spinner from "./Spinner"
import UpdateFundDialog, { UpdateFundDialogProps } from "./dialogs/UpdateFundDialog"
import TextButton from "./controls/TextButton"
import { useMountEffect } from "../common/hooks"

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

  const lastUpdate = balance && balance.lastUpdate ? (new Date(balance.lastUpdate.toString())).toLocaleDateString() : "..."

  const [updateFundDialogProps, setUpdateFundDialogProps] = useState<UpdateFundDialogProps>()
  const [updateFundDialogIsOpen, setUpdateFundDialogIsOpen] = useState(false)

  const openUpdateFundDialog = (fund:Fund) => {
    setUpdateFundDialogProps(
      {
        initialDate: new Date(),
        fund,
        save: (fundUpdate) => {
          setUpdateFundDialogIsOpen(false)
          updateFund(fundUpdate)
        },
        close: () => setUpdateFundDialogIsOpen(false)
      }
    )
    
    setUpdateFundDialogIsOpen(true)
  }

  return isLoading ? <Spinner id="balanceTable-spinner"  /> :
    error ? <><Alert error={error} /><div onClick={reload} style={{cursor: "pointer"}}>Ok, reload</div></> :
    <>
    <div className={styles.section} style={{display: "flex", width: "100%"}}>
      <div style={{flex: "50%" }}><span className={styles.fieldLabel}>Last update:</span> <span className={styles.fieldValue}>{lastUpdate}</span></div>
      <div style={{flex: "50%", textAlign: "right" }}><TextButton onClick={()=> openUpdateFundDialog(undefined)}>Add Fund</TextButton></div>
    </div>
    <Table striped bordered id="balanceTable">
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
          <td><TextButton onClick={() => openUpdateFundDialog(fund) } >Update</TextButton></td>
        </tr>
        )}
      </tbody>
    </Table> 
    { updateFundDialogIsOpen && <UpdateFundDialog {...updateFundDialogProps} /> }
    </>
}

const BalanceTable = () => {
  const [balance, setBalance] = useState<Balance>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

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

  useMountEffect(loadBalance)

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

export default BalanceTable