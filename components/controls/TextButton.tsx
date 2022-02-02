import { FC } from "react"
import styles from  "../../CSS/styles.module.scss"
import { ButtonVariant } from "../styles"

const TextButton:FC<{variant:ButtonVariant, onClick:()=>void}> = (props) => {
  let {variant, onClick, children} = props
  const style = variant == "alternative" ? styles.button_text_alternative : styles.button_text
  return (
    <button className={style} onClick={onClick} >Add</button> 
  );
}

export default TextButton