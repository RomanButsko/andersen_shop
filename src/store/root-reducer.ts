import { combineReducers } from '@reduxjs/toolkit'

import { cartSlice } from './cart/cartSlice'
import { loginSlice } from './login/loginSlice'

export const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
})
