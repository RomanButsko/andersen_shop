import { useCardContext } from '../../hooks/useContext'
import cartLogo from './../../assets/cart.svg'
import style from './Cart.module.sass'

export const Cart = () => {
    const { totalCost, countProduct } = useCardContext()

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
            )} стоимостью ${totalCost}$`}</span>
            <img src={cartLogo} alt="cartLogo" />
        </div>
    )
}
