type SpinnerType = "Spin" | "Pulse"

const Spinner = (props:{id?:string, small?:boolean, type?:SpinnerType}) =>
  <div id={props.id} 
    className={ 
      props.type == "Pulse" ?        
        (props.small ? "spinner-grow spinner-grow-sm" : "spinner-grow") :
        (props.small ? "spinner-border spinner-border-sm" : "spinner-border")
        + " text-secondary"} 
    role="status">
  </div>

export default Spinner 