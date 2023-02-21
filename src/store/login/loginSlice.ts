import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { TypeRootState } from '../store'
import { ILogin } from './loginSlice.interface'

export const initialState: ILogin = {
    isLoggedIn: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeLoginStatus: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
    },
})

export const { changeLoginStatus } = loginSlice.actions

export const selectLogin = (state: TypeRootState) => state.login

export default loginSlice.reducer
