import { FC } from "react"

interface Props {
  currencyCode: string
}

const FundTableRow:FC<Props> = props => {
  

  return <>
  Currency: {props.currencyCode}
  </>

}

export default  FundTableRow