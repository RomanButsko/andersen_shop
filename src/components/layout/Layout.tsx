import { Outlet } from 'react-router'
import { errorsProducts } from '../../services/ProductCards'
import { PopUp } from '../../ui/ErrorPopUp/PopUp'
import { Header } from '../header/Header'

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            {!!errorsProducts.length &&
                errorsProducts.map((error) => <PopUp message={error} />)}
        </>
    )
}
