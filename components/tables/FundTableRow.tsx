import { format } from "date-fns/fp"
import { FC, useState } from "react"
import { Api } from "../../api interfaces/Api"
import { useMountEffect } from "../../common/hooks"
import { getUserCulture } from "../../common/locale"
import { showError, useNotifications } from "../../containers/Notifications"
import SpinnerContainer from "../../containers/SpinnerContainer"
import { FundRecord } from "../../Entities"
import CompanyBadge, { CompanyNameBadge } from "../CompanyBadge"
import Styles from "../styles"

interface Props {
  currencyCode: string
}

const FundTableRow:FC<Props> = props => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [funds, setFunds] = useState<FundRecord[]>([])
  const limit = 10

  const loadFund = async () => {
    setIsLoading(true)
    const result = await Api.Fund.getOfCurrency(props.currencyCode, limit)
    result.isSuccess ? setFunds(result.data) : alert(result.error)
    setIsLoading(false)
  }

  useMountEffect(() => {loadFund()})

  return <SpinnerContainer isLoading={isLoading} size="small" occupyMinSpace={false}>
    <div className={Styles.fundRecord.row}>
      {funds && funds.map(fund => <FundRecordValue key={fund.id} fund={fund} />) }
    </div>
  </SpinnerContainer> 
}

const FundRecordValue:FC<{fund:FundRecord}> = props => {
  const {fund} = props
  const userCulture = getUserCulture()
  
  const monthDay = (date:Date) => format(userCulture.ShortDatePattern, new Date(date))

  return <div className={Styles.fundRecord.column}>
    <div>{monthDay(fund.date)}</div>
    <div><CompanyBadge company={fund.company} /></div>
    <div>{fund.quantity} <span className={Styles.text.small}>{fund.currencyCode}</span></div>
  </div>
}

export default  FundTableRow