export interface Customer {
    customerName: string;
    password?:string;
    balance?:string;
    tier?: Tier
}

export enum Tier{
    Bronze = "BRONZE",
    Silver = "SILVER",
    Gold = "GOLD",
    Platnium = "Platnium"
}
