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
    expandable_td: styles.fundRecord_expandable_td,
    
    dates_container: styles.fundRecord_dates_container,
    grid: styles.fundRecord_grid,
    date: styles.fundRecord_date, 
    companies: styles.fundRecord_companies,
    companies_row: styles.fundRecord_companies_row,
    total: styles.fundRecord_total,

    added: styles.fundRecord_added,
    updated: styles.fundRecord_updated,    
    deleted: styles.fundRecord_deleted,
    inherited: styles.fundRecord_inherited   
  }
}

export default Styles