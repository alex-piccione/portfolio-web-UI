export interface Company {
    id:string,
    name: string,
    types: string[]
}

// these values MUST match the database ones
export const CompanyTypes = ["Bank", "Exchange", "Stacking"]

export interface Currency {
  code: string,
  name: string
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

export interface CompanyFundsAtDate {
  date: Date,
  companies: CompanyFund[],
  totalQuantity: number
}

export interface CompanyFund {
  isInherited: boolean,
  //isAdded: boolean,
  recordId?: string,
  company: Company,
  quantity: number,
  lastChangeDate: Date,
  note: string
}