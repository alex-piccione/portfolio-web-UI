import styles from "../CSS/styles.module.sass"
import text from "../CSS/typography.module.sass"
import colors from "../CSS/colors.module.sass"

export type Color = "primary" | "secondary" | "alternative" | "light" | "dark"
export type ButtonColor = "primary" | "secondary" | "alternative"
export type ButtonStyle = "border" | "text"
export type ButtonVariant = "primary" | "alternative"
//export type IconColor = "primary" | "secondary" | "alternative"

const Styles = {
  section: styles.section,
  panel: styles.panel,
  text: {
    small: text.small,
    alignRight: text.alignRight,
    fieldLabel: text.fieldLabel,
    fieldValue: text.fieldValue,
  },
  colors: colors,
  table: {
    row_expanded: styles.row_expanded,
    row_collapsed: styles.row_collapsed,
  },
  fundRecord: {
    td: styles.fundRecord_td,
    container: styles.fundRecord_container,
    row: styles.fundRecord_row,
    column: styles.fundRecord_column,
  }
}

export default Styles