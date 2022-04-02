import React, { useState } from "react"
import { Table } from "react-bootstrap"
import styles from  "../../CSS/styles.module.sass"
import Alert from "../Alert"
import { CompanyNameBadge } from "../CompanyBadge"
import { Balance, Fund } from "../../Entities"
import Spinner from "../Spinner"
import UpdateFundDialog, { UpdateFundDialogProps } from "../dialogs/UpdateFundDialog"
import TextButton from "../controls/TextButton"
import { useBaseCurrency, useMountEffect } from "../../common/hooks"
import { Api } from "../../api interfaces/Api"

const baseCurrency = "EUR"

interface TableProps {
  isLoading:boolean,
  error:string|undefined,
  balance:Balance|undefined,
  reload: () => void,
}

const View = (props:TableProps) => {
  const {isLoading, error, balance, reload} = props
  const renderCompanies = (companies:{id:string, name:string}[]) => companies.map(company => 
    <CompanyNameBadge key={company.id} company={company.name} />
  )  
  
  const lastUpdate = balance && balance.lastUpdate ? (new Date(balance.lastUpdate.toString())).toLocaleDateString() : "..."

  const [updateFundDialogProps, setUpdateFundDialogProps] = useState<UpdateFundDialogProps>()
  const [updateFundDialogIsOpen, setUpdateFundDialogIsOpen] = useState(false)

  const baseCurrency = useBaseCurrency()

  const openUpdateFundDialog = (fund:Fund|undefined) => {
    setUpdateFundDialogProps(
      {
        initialDate: new Date(),
        fund,
        close: (shouldReload:boolean) => {
          setUpdateFundDialogIsOpen(false)
          shouldReload && reload()
        }
      }
    )
    
    setUpdateFundDialogIsOpen(true)
  }

  // TODO: the id is still needed for tests?
  return isLoading ? <Spinner id="balanceTable-spinner" /> :
    error ? <><Alert type="error">{error}</Alert> <div onClick={reload} style={{cursor: "pointer"}}>Ok, reload</div></> :
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
          <th>Value (in {baseCurrency.currency})</th>
          <th>Companies</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {balance && balance.fundsByCurrency.map(fund => 
        <tr key={fund.currencyCode}>
          <td>{fund.currencyCode}</td>
          <td>{fund.quantity}</td>
          <td>n/a</td>
          <td>{renderCompanies(fund.companies)}</td>
          <td><TextButton onClick={() => openUpdateFundDialog(fund) } >Update</TextButton></td>
        </tr>
        )}
      </tbody>
    </Table> 
    { updateFundDialogIsOpen && updateFundDialogProps && <UpdateFundDialog {...updateFundDialogProps} /> } 
    </>
}

const BalanceTable = () => {
  const [balance, setBalance] = useState<Balance>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const loadBalance = async () => {    
    setLoading(true)
    const result = await Api.Balance.getBalance(baseCurrency)
    result.isSuccess ? setBalance(result.data) : setError(result.error)
    setLoading(false)
  }

  const reload = () => {
    setError(undefined)
    loadBalance()
  }

  useMountEffect(() => { loadBalance() })
 
  return <View isLoading={loading} error={error} balance={balance} reload={reload} />
}

export default BalanceTable