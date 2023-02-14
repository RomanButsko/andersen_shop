import { ChangeEvent, FC, useState } from 'react'
import { useCardContext, useLoginContext } from '../../hooks/useContext'
import { ICardBuy } from './cardBuy.interface'
import style from './CardBuy.module.sass'

export const CardBuy: FC<ICardBuy> = ({ productId, cost }) => {
    const [countProducts, setCountProducts] = useState<number>(1)

    const { addProduct } = useCardContext()
    const { isLoggedIn } = useLoginContext()

    const handleAddProduct = () =>
        addProduct(productId, cost * countProducts, countProducts)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
        setCountProducts(+e.target.value)

    const handleCountPlus = () => setCountProducts(countProducts + 1)

    const handleCountMinus = () => {
        if (countProducts === 0) return
        setCountProducts(countProducts - 1)
    }

    return (
        <div className={style.container}>
            {isLoggedIn ? (
                <>
                    <div className={style.container_count}>
                        <button onClick={handleCountPlus}>+</button>
                        <input
                            value={countProducts}
                            onChange={handleInputChange}
                            style={{
                                width: `${
                                    (String(countProducts).length + 1) * 8
                                }px`,
                                textAlign: 'center',
                            }}
                        />
                        <button onClick={handleCountMinus}>-</button>
                    </div>

                    <button
                        onClick={handleAddProduct}
                        className={style.container_btn}
                    >
                        Добавить в корзину
                    </button>
                </>
            ) : (
                <span className={style.container_refusal}>
                    Войдите, чтобы добавить товар в корзину
                </span>
            )}
        </div>
    )
}
