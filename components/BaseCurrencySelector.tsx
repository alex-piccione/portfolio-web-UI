import { FC } from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import { useBaseCurrency } from "../containers/BaseCurrencyContainer"

const Selector:FC = () => {
  const baseCurrency = useBaseCurrency()
  const getVariant = (currency:string) => (currency === baseCurrency.currency) ? "primary" : "secondary"

  return <ButtonGroup aria-label="Base currency" size="sm">
    {baseCurrency.currencies.map(currency => 
      <Button key={currency} variant={getVariant(currency)} 
      onClick={e => baseCurrency.setCurrency(currency)}>
      {currency}</Button>
    )}
  </ButtonGroup>  
}

export default Selector