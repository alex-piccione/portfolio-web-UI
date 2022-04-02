import React, { useEffect, useState } from "react"
import { NextPageContext } from "next"
import { DefaultPage } from "../components/DefaultPage"
import styles from "../CSS/styles.module.sass"
import { Col, Container, Row, Table } from "react-bootstrap"
import { useLocale } from "../common/hooks"
import Field from "../components/Field"

export default function Page(props:NextPageContext) {
  const [error, setError] = useState<string>()
  const [browserLanguage] = useState<string>("unknown")
  const locale = useLocale()

  const reload = async () => {

  }

  useEffect(() => {
    reload()
    
    //localStorage.setItem("language", browserLanguage)
  }, [])

  return <DefaultPage
    title="Settings" 
    description="Settings of the application and of the user browser">  

<div className="section">
    <Container >
      <Row>
        <Col>
          <Field label="Browser language" value={locale.browserLocale} />
        </Col>
        <Col>
          <Field label="Application language" value={locale.language} />
        </Col>
        <Col>
          <Field label="Application locale" value={locale.locale} />
        </Col>
      </Row>
    </Container></div>
    
  </DefaultPage>  
}