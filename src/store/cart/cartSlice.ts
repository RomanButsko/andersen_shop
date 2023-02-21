import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { TypeRootState } from '../store'
import { CounterStateReq, CounterStateRes } from './cartSlice.interface'

export const initialState: CounterStateRes = {
    totalCost: 0,
    products: [],
    countProduct: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CounterStateReq>) => {
            state.totalCost += action.payload.totalCost
            const existProductIndex = state.products.findIndex(
                (item) => item.id === action.payload.products.id
            )
            if (~existProductIndex) {
                state.products[existProductIndex].count +=
                    action.payload.products.count
            } else {
                state.products.push(action.payload.products)
            }
            state.countProduct += action.payload.countProduct
        },
        increaseCount: (state, action: PayloadAction<CounterStateReq>) => {
            state.totalCost += action.payload.totalCost
            const existProductIndex = state.products.findIndex(
                (item) => item.id === action.payload.products.id
            )
            state.products[existProductIndex].count +=
                action.payload.countChange || 1
            state.countProduct += action.payload.countProduct
        },
        reduceCount: (state, action: PayloadAction<CounterStateReq>) => {
            state.totalCost -= action.payload.totalCost
            const existProductIndex = state.products.findIndex(
                (item) => item.id === action.payload.products.id
            )
            state.products[existProductIndex].count -=
                action.payload.countChange || 1
            state.countProduct -= action.payload.countProduct
        },
        removeProduct: (state, action: PayloadAction<CounterStateReq>) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload.products.id
            )
            state.countProduct -= action.payload.countProduct
            state.totalCost -= action.payload.totalCost
        },
        removeAllProducts: (state) => {
            state.products = []
            state.totalCost = 0
            state.countProduct = 0
        },
    },
})

export const {
    addProduct,
    increaseCount,
    reduceCount,
    removeProduct,
    removeAllProducts,
} = cartSlice.actions

export const selectCart = (state: TypeRootState) => state.cart

export default cartSlice.reducer