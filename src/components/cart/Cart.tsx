import { useNavigate } from 'react-router'

import { useAppSelector } from '../../hooks/useSelector'
import { selectCart } from '../../store/cart/cartSlice'
import cartLogo from './../../assets/cart.svg'
import style from './Cart.module.sass'

export const Cart = () => {
    const { totalCost, countProduct } = useAppSelector(selectCart)
    const navigate = useNavigate()
    const checkCountProducts = (length: number) => {
        if (length === 11) return 'товаров'
        if (length % 10 === 1) return 'товар'
        if (length >= 2 && length <= 4) return 'товара'
        return 'товаров'
    }
    return (
        <div className={style.container}>
            <span>{`В корзине ${countProduct} ${checkCountProducts(
                countProduct
            )} стоимостью ${totalCost.toLocaleString()}$`}</span>
            <img
                src={cartLogo}
                alt="cartLogo"
                onClick={() => navigate('/basket')}
            />
        </div>
    )
}
