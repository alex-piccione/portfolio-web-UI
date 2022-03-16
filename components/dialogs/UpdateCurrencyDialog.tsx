import { FC, useEffect, useState } from "react"
import { Currency } from "../entities"
import Dialog from "./Dialog"
import { saveCurrency } from "../../api interfaces/CurrenciesApi"
import TextBox from "../controls/TextBox"
import { Button, Col, Form, Row } from "react-bootstrap"
import Alert from "../Alert"

interface Props {
  show: boolean
  currencyToUpdate:Currency|undefined
  onClose: (addedOrUpdated:boolean) => void
}

const UpdateCurrencyDialog: FC<Props> = props => {
  const isNew = props.currencyToUpdate === undefined
  const title = isNew ? "Add new Currency" : `Update Currency ${props.currencyToUpdate?.code}`

  const validationError = ""

  const formData = {
    code: props.currencyToUpdate?.code || "",
    name: props.currencyToUpdate?.name || "",
  }

  const save = () => {

    props.onClose(true)
  }
  
  return <>
  <Dialog 
    title={title}
    show={props.show} 
    confirmClick={save}
    cancelClick={() => props.onClose(false) }>
    <Form onSubmit={save} >
      <Form.Group as={Row}>
        {validationError && <Alert type="warning">{validationError}</Alert>}
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="5">Code</Form.Label>
        <Col sm="7">
          <TextBox value={formData.code} onChange={e => formData.code = e.target.value} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm="5">Name</Form.Label>
        <Col sm="7">
        <TextBox value={formData.name} onChange={e => formData.name = e.target.value} />
        </Col>
      </Form.Group>    
    </Form>
  </Dialog></>
}

export default UpdateCurrencyDialog