import React, { useEffect, useState } from "react"
import { DefaultPage } from "../components/DefaultPage"
import { NextPageContext } from "next"
import styles from "../CSS/styles.module.sass"
import { Table } from "react-bootstrap"

export default function Page(props:NextPageContext) {
  const [error, setError] = useState<string>()

  const reload = async () => {

  }

  useEffect(() => {
    reload()
  }, [])

  return <DefaultPage
    title="Settings" 
    description="Settings of the application and of the user browser">  

    <p>
    There is no content yet.
    </p>

    <Table>

    </Table>
    
  </DefaultPage>  
}