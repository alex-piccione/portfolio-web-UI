import axios from "axios"
import React, { useState } from "react"
import Alert from "./Alert"
import { CompanyNameBadge } from "./CompanyBadge"
import { Balance, Fund, FundUpdate } from "./entities"
import Spinner from "./Spinner"
import { Table } from "react-bootstrap"
import AddOrUpdateFundDialog, { UpdateFundDialogProps } from "./dialogs/AddOrUpdateFundDialog"
import { useMountEffect } from "../common/hooks"
import TextButton from "./controls/TextButton"

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

  const [updateFundDialogProps, setUpdateFundDialogProps] = useState<UpdateFundDialogProps>()
  const [fundUpdateDialogIsOpen, setFundUpdateDialogIsOpen] = useState(false)

  const openUpdateFundDialog = (fund:Fund) => {
    setUpdateFundDialogProps(
      {
        initialDate: new Date(),
        fund,
        save: (fundUpdate) => {
          setFundUpdateDialogIsOpen(false)
          updateFund(fundUpdate)
        },
        close: () => setFundUpdateDialogIsOpen(false)
      }
    )
    
    setFundUpdateDialogIsOpen(true)
  }

  return isLoading ? <Spinner id="balanceTable-spinner"  /> :
    error ? <><Alert error={error} /><div onClick={reload} style={{cursor: "pointer"}}>Ok, reload</div></> :
    <>
    <div>
      <TextButton onClick={()=> openUpdateFundDialog(undefined)}>Add Fund</TextButton>
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
          <td>   
            <TextButton onClick={() => openUpdateFundDialog(fund) } >Update</TextButton>
          </td>
        </tr>
        )}
      </tbody>
    </Table> 
    fundUpdateDialogIsOpen: {fundUpdateDialogIsOpen}
    { fundUpdateDialogIsOpen && <AddOrUpdateFundDialog {...updateFundDialogProps} /> }
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