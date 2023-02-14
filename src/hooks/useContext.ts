import { useContext } from 'react'
import { AppContext } from '../hoc/CartProvider'
import { LoginContext } from '../hoc/LoginProvider'

export const useCardContext = () => {
    const data = useContext(AppContext)

    if (!data) {
        throw new Error('useAppContext must be used within a AppProvider')
    }

    return data
}

export const useLoginContext = () => {
    const data = useContext(LoginContext)

    if (!data) {
        throw new Error('useAppContext must be used within a AppProvider')
    }

    return data
}
