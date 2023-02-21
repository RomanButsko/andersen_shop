import { IProductCart } from '../../types/products'

export interface CounterStateRes {
    totalCost: number
    products: IProductCart[]
    countProduct: number
}

export interface CounterStateReq {
    totalCost: number
    products: IProductCart
    countProduct: number
    countChange?: number
}
