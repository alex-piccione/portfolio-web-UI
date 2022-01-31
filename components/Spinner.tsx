const Spinner = (props:{id?:string, small?:boolean}) =>
  <div id={props.id} className={ props.small ? "spinner-border-sm" : "spinner-border" + " text-secondary"} role="status">
  </div>

export default Spinner 