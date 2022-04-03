import { FC } from "react"
import { Container } from "react-bootstrap"
import styles from "../CSS/styles.module.sass"

interface Props {
  fluid?: boolean
}

const Panel:FC<Props> = props => {
  return <Container fluid={props.fluid}>
    <div className={styles.panel}>{props.children}</div>
  </Container>
}

export default Panel