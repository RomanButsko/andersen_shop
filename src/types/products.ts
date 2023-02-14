export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: Category
    images: string[]
}

interface Category {
    id: number
    name: string
    image: string
}

export interface IBin {
    addProduct: (id: number, cost: number, count: number) => void
    totalCost: number
    productsId: number[]
    countProduct: number
    // removeProduct: (id: number, cost: number) => void;
}
