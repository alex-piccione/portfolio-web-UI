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

export interface Fund {
  currencyCode:string, amount:number, companies:{ id:string, name:string }[]
}

export type Balance = {
  date: Date,
  fundsByCurrency: Fund[]
}

export interface FundUpdate {
  fund: Fund
}

export interface FundUpdateAtDate {
  date: Date,
  fund: Fund
}