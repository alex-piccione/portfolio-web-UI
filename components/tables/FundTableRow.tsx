import { format } from "date-fns/fp"
import { FC, useState } from "react"
import { Api } from "../../api interfaces/Api"
import formatter from "../../common/formatter"
import { useMountEffect } from "../../common/hooks"
import { getUserCulture } from "../../common/locale"
import { showError, useNotifications } from "../../containers/Notifications"
import SpinnerContainer from "../../containers/SpinnerContainer"
import { FundRecord } from "../../Entities"
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

  return <SpinnerContainer isLoading={isLoading} occupyMinSpace={false}>
    <div className={Styles.fundRecord.row}>
      {funds && funds.map(fund => <FundRecordValue key={fund.id} fund={fund} />) }
    </div>
  </SpinnerContainer> 
}


const FundRecordValue:FC<{fund:FundRecord}> = props => {
  const {fund} = props

  const userCulture = getUserCulture()
  const pattern = userCulture.ShortDatePattern
    //.replace("yyyy", "yy").replace("yy", "")
    //.replace("MMM", "M").replace("MM", "M").replace("dd", "d")

  
  const monthDay = (date:Date) => {     

    return format(userCulture.ShortDatePattern, new Date(date))

    //new Date(date).toS
    //return pattern
    //  .replace("M", (new Date(date).getMonth()+1).toString())
    //  .replace("d", new Date(date).getDate().toString())
  }

  return <div className={Styles.fundRecord.column}>
    <div>{monthDay(fund.date)}</div>
    <div>Company: {fund.companyId}</div>
    <div>Quantity: {fund.quantity}</div>
  </div>
}

export default  FundTableRow