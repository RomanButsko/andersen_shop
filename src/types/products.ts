export interface IProduct {
    id: number
    description: string
    category: string
    price: number
    rating: Rate
    title: string
    image: string
}

export interface IProductCart extends IProduct {
    count: number
}

interface Rate {
    count: number
    rate: number
}

export interface IBin {
    addProduct: (id: number, cost: number, count: number) => void
    totalCost: number
    productsId: number[]
    countProduct: number
}
