import React, { FC, useEffect, useState } from "react"
import CompanyBadge, { CompanyNameBadge, CompanyNameBadge2 } from "./CompanyBadge"
import { Balance } from "./entities"
import Spinner from "./Spinner"


/* axios usage example: https://stackoverflow.com/questions/52766608/how-to-retrieve-data-from-reactjs-and-api */


export const BalanceTable1 = () => {

  const [balance, setBalance] = useState<Balance>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  // const [error, setError] = useState<string>(undefined)

  const loadBalance = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setBalance(undefined); }, 2000)
  }

  useEffect(() => loadBalance(), [])

  const renderCompanies = (companies:string[]) => companies.map(company => 
    <CompanyNameBadge2 company={company} />
    )  

  return loading ? <Spinner /> :
  <table>
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

class BalanceTable extends React.Component {
  
  //useEffect( () => loadBalance(), [])
  //[balance, setBalance] = useState<Balance>(undefined)
  balance:Balance = undefined

  render() { 
  
    const renderCompanies = (companies:string[]) => companies.map(company => 
      <CompanyNameBadge2 company={company} />
      )    

    return <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Quantity</th>
          <th>Companies</th>
        </tr>
      </thead>
      <tbody>
      {this.balance && this.balance.fundsByCurrency.map(fund => 
        <tr key={fund.currencyCode}>
          <td>{fund.currencyCode}</td>
          <td>{fund.amount}</td>
          <td>{renderCompanies(fund.companies)}</td>
        </tr>
        )}
      </tbody>
    </table> 
  }

}

export default BalanceTable