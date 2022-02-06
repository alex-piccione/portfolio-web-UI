import React from "react"
import { Currency } from "./entities"

type Props = {
  currencies: Currency[]
}

class CurrenciesTable extends React.Component<Props> {

  render() {
    const {currencies} = this.props

    return <table className="table table-striped">
      <thead>
        <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Info</td>
        </tr>
      </thead>
      <tbody>
        {currencies && currencies.map(currency => 
        <tr key={currency.code}>
            <td>{currency.code}</td>
            <td>{currency.name}</td>
            <td></td>
        </tr>
        )}
      </tbody>
    </table>
  }
}

export default CurrenciesTable