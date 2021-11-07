export type Company = {
    Id:string,
    Name: string,
    Types: string[]
}

//export CompanyType = "Bank" | "Exchange" | "Stacking"

export type Currency = {
  Code: string,
  Name: string
}

export type Balance = {
  date: Date,
  fundsByCurrency: { currencyCode:string, amount:number, companies:{id:string, name:string}[] }[]
}