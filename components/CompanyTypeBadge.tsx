const CompanyTypeBadge = function(props:{companyType:string})  {
  const bgColor = 
    props.companyType == "Bank" ? "blue" :
    props.companyType == "Exchange" ? "purple" :
    props.companyType == "Stacking" ? "green" :
    "gray"
   return <span className="badge rounded-pill" style={{backgroundColor: bgColor, marginRight:".5em"}}>{props.companyType}</span>
}

export default CompanyTypeBadge