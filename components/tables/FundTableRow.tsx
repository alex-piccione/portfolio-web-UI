import { format } from "date-fns/fp"
import { FC, Fragment, useState } from "react"
import { Api } from "../../api interfaces/Api"
import { useMountEffect } from "../../common/hooks"
import { getUserCulture } from "../../common/locale"
import { showError, useNotifications } from "../../containers/Notifications"
import SpinnerContainer from "../../containers/SpinnerContainer"
import { CompanyFundsAtDate } from "../../Entities"
import Styles from "../styles"

interface Props {
  currencyCode: string
}

const FundTableRow:FC<Props> = props => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [funds, setFunds] = useState<CompanyFundsAtDate[]>([])

  const loadFund = async () => {
    setIsLoading(true)
    const from = new Date(2000, 1, 1)
    const result = await Api.Fund.getOfCurrency(props.currencyCode, from)
    result.isSuccess ? setFunds(result.data) : alert(result.error)
    setIsLoading(false)
  }

  useMountEffect(() => {loadFund()})

  return <SpinnerContainer isLoading={isLoading} size="small" occupyMinSpace={false}>
    <div className={Styles.fundRecord.dates_container}>           
      {funds && funds.map(fund => <FundRecordValue key={fund.totalQuantity} currencyCode={props.currencyCode} fund={fund} />) }
    </div>
  </SpinnerContainer> 
}

const FundRecordValue:FC<{currencyCode:string, fund:CompanyFundsAtDate}> = props => {
  const {fund} = props
  const userCulture = getUserCulture()
  
  const date = (date:Date) => format(userCulture.ShortDatePattern, new Date(date))

  return <div className={Styles.fundRecord.grid}>
    <div className={Styles.fundRecord.date}>
      {date(fund.date)}     
    </div>    
    <div className={Styles.fundRecord.companies}>    
    {fund.companies.map(companyFund => 
      <Fragment key={companyFund.recordId}>
        <div>{companyFund.company.name}</div>
        <div className="quantity">{companyFund.quantity}</div>
      </Fragment>      
    )}
    </div>    
    <div className={Styles.fundRecord.total}>{fund.totalQuantity}</div>
  </div>
}

export default  FundTableRow