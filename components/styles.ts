import styles from "../CSS/styles.module.sass"
import text from "../CSS/typography.module.sass"
import colors from "../CSS/colors.module.sass"

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
  },
  colors: colors,
  table: {
    row_expanded: styles.row_expanded,
    row_collapsed: styles.row_collapsed,
  },
  fundRecord: {
    table: styles.fundRecord_table,
    td: styles.fundRecord_td,
    container: styles.fundRecord_container,
    row: styles.fundRecord_row,
    column: styles.fundRecord_column,
    date: styles.fundRecord_date,
    company: styles.fundRecord_company,
    
    grid: styles.fundRecord_grid,
    companies: styles.fundRecord_companies,
    total: styles.fundRecord_total,
  }
}

export default Styles