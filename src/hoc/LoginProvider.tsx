import { createContext, useState } from 'react'
import { ChildrenProps } from '../types/children'

interface IContextData {
    isLoggedIn: boolean
    changeLoginStatus: (value: boolean) => void
}

export const LoginContext = createContext<IContextData | null>(null)

export const LoginProvider = ({ children }: ChildrenProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const changeLoginStatus = (value: boolean) => {
        setIsLoggedIn(value)
    }

    return (
        <LoginContext.Provider value={{ isLoggedIn, changeLoginStatus }}>
            {children}
        </LoginContext.Provider>
    )
}
