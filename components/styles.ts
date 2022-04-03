import styles from "../CSS/styles.module.sass"
import text from "../CSS/typography.module.sass"

export type Color = "primary" | "secondary" | "alternative" | "light" | "dark"
export type ButtonColor = "primary" | "secondary" | "alternative"
export type ButtonStyle = "border" | "text"
export type ButtonVariant = "primary" | "alternative"

const Styles = {
  section: styles.section,
  panel: styles.panel,
  text: {
    small: text.small,
    alignRight: text.alignRight,
    fieldLabel: text.fieldLabel,
    fieldValue: text.fieldValue,
  }
}

export default Styles