import styles from "../CSS/styles.module.sass"

export type Color = "primary" | "secondary" | "alternative" | "light" | "dark"
export type ButtonColor = "primary" | "secondary" | "alternative"
export type ButtonStyle = "border" | "text"
export type ButtonVariant = "primary" | "alternative"

export const Styles = {
  section: styles.section,
  panel: styles.panel,
  text: {
    alignRight: styles.align_right,
    fieldLabel: styles.field_label,
    fieldValue: styles.field_value,
  }
}

/*
const primaryColor = "#074A6A"
const secondaryColor = "#04273B"
const alternativeColor = "#FF4141"
const lightColor = "#F9F9F9"
const darkColor = "#333333"
*/
