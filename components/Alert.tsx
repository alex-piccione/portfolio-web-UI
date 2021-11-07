const Alert = (props:{error:string, warn?:string},  autoclose?:boolean) =>
  <div className="alert alert-danger" role="alert">{props.error}</div>
/*action?=()=>{},*/
export default Alert  