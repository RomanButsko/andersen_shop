import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './hoc/CartProvider'
import { LoginProvider } from './hoc/LoginProvider'
import router from './router'

export const App = () => {
    return (
        <LoginProvider>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </LoginProvider>
    )
}
