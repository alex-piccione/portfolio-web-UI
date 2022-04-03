import React, { useEffect, useState } from "react"
import { NextPageContext } from "next"
import { DefaultPage } from "../components/DefaultPage"
import { Col, Container, Row } from "react-bootstrap"
import { useLocale } from "../common/hooks"
import Field from "../components/Field"
import { useBaseCurrency } from "../containers/BaseCurrencyContainer"

export default function Page(props:NextPageContext) {
  const baseCurrency = useBaseCurrency()
  const locale = useLocale()

  const reload = async () => {

  }

  useEffect(() => {
    reload()
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
          <Col>
            <Field label="Base currency" value={baseCurrency.currency} />
          </Col>
        </Row>
      </Container>
      </div>
    
  </DefaultPage>  
}