import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import Alert from "../Alert"
import Field from "../Field"
import { CompanyNameBadge } from "../CompanyBadge"
import SpinnerContainer from "../../containers/SpinnerContainer"
import UpdateFundDialog, { UpdateFundDialogProps } from "../dialogs/UpdateFundDialog"
import TextButton from "../controls/TextButton"

import { useMountEffect } from "../../common/hooks"
import { useBaseCurrency } from "../../containers/BaseCurrencyContainer"
import { Api } from "../../api interfaces/Api"
import { Balance, Fund } from "../../Entities"

import Styles from "../styles"


interface TableProps {
  isLoading:boolean,
  balance:Balance|undefined,
  baseCurrency: string,
  reload: () => void,
}

const View = (props:TableProps) => {
  const {isLoading, balance, baseCurrency, reload} = props    
  const lastUpdate = balance && balance.lastUpdate ? (new Date(balance.lastUpdate.toString())).toLocaleDateString() : "..."  
  const [updateFundDialogProps, setUpdateFundDialogProps] = useState<UpdateFundDialogProps>()
  const [updateFundDialogIsOpen, setUpdateFundDialogIsOpen] = useState(false) 

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

  const renderCompanies = (companies:{id:string, name:string}[]) => companies.map(company => 
    <CompanyNameBadge key={company.id} company={company.name} />
  )  

  return <>
    <div className={Styles.section} style={{display: "flex", width: "100%"}}>      
      <div style={{flex: "50%" }}>
        <Field  inline singleRow label="Last update: " value={lastUpdate} />
      </div>
      <div style={{flex: "50%", textAlign: "right" }}><TextButton onClick={()=> openUpdateFundDialog(undefined)}>Add Fund</TextButton></div>
    </div>
    <SpinnerContainer isLoading={isLoading}>{balance &&
    <Table striped bordered id="balanceTable">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Quantity</th>
          <th>Value (in {baseCurrency})</th>
          <th>Companies</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {balance.fundsByCurrency.map(fund => 
        <tr key={fund.currencyCode}>
          <td>{fund.currencyCode}</td>
          <td className={Styles.text.alignRight}>{fund.quantity}</td>
          <td className={Styles.text.alignRight}>n/a</td>
          <td>{renderCompanies(fund.companies)}</td>
          <td><TextButton onClick={() => openUpdateFundDialog(fund) } >Update</TextButton></td>
        </tr>
        )}
      </tbody>
    </Table> 
    }</SpinnerContainer>
    { updateFundDialogIsOpen && updateFundDialogProps && <UpdateFundDialog {...updateFundDialogProps} /> } 
  </>
}

const BalanceTable = () => {
  const baseCurrency = useBaseCurrency()
  const [balance, setBalance] = useState<Balance>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const loadBalance = async () => {    
    setLoading(true)
    const result = await Api.Balance.getBalance(baseCurrency.currency)
    result.isSuccess ? setBalance(result.data) : setError(result.error)
    setLoading(false)
  }

  const reload = () => {
    setError(undefined)
    loadBalance()
  }

  useMountEffect(() => {loadBalance()})

  useEffect(reload, [baseCurrency.currency])
 
  return error ? 
    <><Alert type="error">{error}</Alert> <div onClick={reload} style={{cursor: "pointer"}}>Ok, retry</div></> :
    <View isLoading={loading} balance={balance} baseCurrency={baseCurrency.currency} reload={reload} />  
}

export default BalanceTable