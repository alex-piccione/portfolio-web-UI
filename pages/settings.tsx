import React, { useEffect, useState } from "react"
import { DefaultPage } from "../components/DefaultPage"
import { NextPageContext } from "next"
import styles from "../CSS/styles.module.sass"
import { Table } from "react-bootstrap"
import { useBaseCurrency } from "../common/hooks"

export default function Page(props:NextPageContext) {
  const [error, setError] = useState<string>()
  const baseCurrency = useBaseCurrency()

  const reload = async () => {

  }

  useEffect(() => {
    reload()
  }, [])

  return <DefaultPage
    title="Settings" 
    description="Settings of the application and of the user browser">  

    base currency: {baseCurrency.currency}

    <Table>

    </Table>
    
  </DefaultPage>  
}