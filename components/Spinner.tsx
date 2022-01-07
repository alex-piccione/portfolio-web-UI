
const Spinner = (props:{id?:string}) =>
  <div id={props.id} className="spinner-border text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>

export default Spinner 