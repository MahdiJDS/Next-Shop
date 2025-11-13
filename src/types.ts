import { CartItem } from "./context/productManagment"

export interface jsonType {
    id: string,
    title: string,
    img: string,
    description: string,
    price: number
}

export interface buyType{
    items:CartItem[],
    totalPrice: number
}
