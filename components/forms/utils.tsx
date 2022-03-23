import { FC } from "react"
import { Form, Row } from "react-bootstrap"
import Alert from "../Alert"

const ValidationRow: FC<{validationError:string|undefined}> = props => {

  return <Form.Group as={Row}>
    {props.validationError && <Alert type="warning">{props.validationError}</Alert>}
  </Form.Group>

}

export {ValidationRow}