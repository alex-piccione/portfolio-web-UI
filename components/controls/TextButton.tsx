import { FC } from "react"
import { Button } from "react-bootstrap"
import styles from  "../../CSS/styles.module.scss"
import { ButtonVariant } from "../styles"

const TextButton:FC<{variant:ButtonVariant}> = (props) => {
  //const color = (props.style || "primary") == "primary" ? Color.primary : Color.secondary

  let {variant, children} = props

  const style = variant == "alternative" ? styles.button_text_alternative : styles.button_text
  return (
    <Button className={style}>
      {props.children}
    </Button>
  );
}

export default TextButton