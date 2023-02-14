import { createContext, useState } from 'react'
import { ChildrenProps } from '../types/children'
import { IBin } from '../types/products'

export const AppContext = createContext<IBin | null>(null)

const AppProvider = AppContext.Provider

export const CartProvider = ({ children }: ChildrenProps) => {
    const [totalCost, setTotalCost] = useState<number>(0)
    const [productsId, setProductId] = useState<number[]>([])
    const [countProduct, setCountProduct] = useState<number>(0)

    const addProduct = (id: number, cost: number, count: number) => {
        setProductId([...productsId, id])
        setTotalCost(totalCost + cost)
        setCountProduct(countProduct + count)
    }

    //!!will need a little later!!
    // const removeProduct = (id: number, cost: number) => {
    //     setProductId(productId.filter(p => p!== id));
    //     setTotalCost(totalCost - cost);
    // }

    return (
        <AppProvider
            value={{ addProduct, totalCost, productsId, countProduct }}
        >
            {children}
        </AppProvider>
    )
}
