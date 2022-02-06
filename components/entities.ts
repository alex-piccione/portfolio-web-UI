export type Company = {
    id:string,
    name: string,
    types: string[]
}

//export CompanyType = "Bank" | "Exchange" | "Stacking"

export type Currency = {
  Code: string,
  Name: string
}

export interface Fund {
  currencyCode:string, quantity:number, companies:{ id:string, name:string }[]
}

export type Balance = {
  date: Date,
  fundsByCurrency: Fund[],
  lastUpdate: Date
}

export type FundUpdate = {
  date: Date,
  currencyCode: string,
  quantity: number,
  companyId: string
}