type AlertType = "info" | "success" | "warning" | "error"

const Alert = (props:{type:AlertType, children:string, autoclose?:boolean} ) =>
  <div 
    className={"alert " + (
      props.type == "info" ? "alert-info" : 
      props.type == "success" ? "alert-success" : 
      props.type == "warning" ? "alert-warning" : 
      "alert-danger")}
    role="alert">{props.children}
  </div>
/*action?=()=>{},*/
export default Alert  