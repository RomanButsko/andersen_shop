import { useNavigate } from 'react-router'

import { useAppSelector } from '../../../hooks/useSelector'
import { selectCart } from '../../../store/cart/cartSlice'
import { selectLogin } from '../../../store/login/loginSlice'
import { Button } from '../../../ui/button/Button'
import { Basket } from '../../basket/Basket'
import emptyBasket from './../../../assets/emtpyBin.avif'
import style from './BasketPage.module.sass'

export const BasketPage = () => {
    const { products } = useAppSelector(selectCart)
    const { isLoggedIn } = useAppSelector(selectLogin)
    const navigate = useNavigate()
    return (
        <>
            {products.length && isLoggedIn ? (
                <Basket products={products} />
            ) : (
                <div className={style.container}>
                    <div className={style.container_title}>
                        <h1>Товары не добавлены</h1>
                        <Button onClick={() => navigate('/')}>
                            Продолжить поиск
                        </Button>
                    </div>
                    <img
                        src={emptyBasket}
                        alt="empty"
                        width="40%"
                        height="40%"
                    />
                </div>
            )}
        </>
    )
}
