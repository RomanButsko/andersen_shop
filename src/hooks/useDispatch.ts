import { useDispatch } from 'react-redux'

import {
    addProduct,
    increaseCount,
    reduceCount,
    removeAllProducts,
    removeProduct,
} from '../store/cart/cartSlice'
import { CounterStateReq } from '../store/cart/cartSlice.interface'
import { changeLoginStatus } from '../store/login/loginSlice'

export const useCartActions = () => {
    const dispatch = useDispatch()

    const addProductDispatch = ({
        products,
        countProduct,
        totalCost,
    }: CounterStateReq) => {
        dispatch(addProduct({ products, countProduct, totalCost }))
    }

    const increase = ({
        products,
        countProduct,
        totalCost,
        countChange,
    }: CounterStateReq) => {
        dispatch(
            increaseCount({ products, countProduct, totalCost, countChange })
        )
    }

    const reduce = ({
        products,
        countProduct,
        totalCost,
        countChange,
    }: CounterStateReq) => {
        dispatch(
            reduceCount({ products, countProduct, totalCost, countChange })
        )
    }

    const remove = ({ products, countProduct, totalCost }: CounterStateReq) => {
        dispatch(removeProduct({ products, countProduct, totalCost }))
    }

    const removeAll = () => dispatch(removeAllProducts())

    return {
        addProductDispatch,
        increase,
        reduce,
        remove,
        removeAll,
    }
}

export const useLoginActions = () => {
    const dispatch = useDispatch()

    const handleLoginStatus = (value: boolean) => {
        dispatch(changeLoginStatus(value))
    }
    return {
        handleLoginStatus,
    }
}
