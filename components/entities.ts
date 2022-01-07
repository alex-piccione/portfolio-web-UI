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
  currencyCode:string, quantity:number, companies:{ id:string, name:string }[]
}

export type Balance = {
  date: Date,
  fundsByCurrency: Fund[]
}

export type FundUpdate = {
  date: Date,
  currencyCode: string,
  quantity: number,
  companyIds: string[]
}