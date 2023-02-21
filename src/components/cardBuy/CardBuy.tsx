import { ChangeEvent, FC, useState } from 'react'

import { useCartActions } from '../../hooks/useDispatch'
import { useAppSelector } from '../../hooks/useSelector'
import { productService } from '../../services/ProductCards'
import { selectLogin } from '../../store/login/loginSlice'
import { IProduct } from '../../types/products'
import { Button } from '../../ui/button/Button'
import style from './CardBuy.module.sass'
import { ICardBuy } from './cardBuy.interface'

export const CardBuy: FC<ICardBuy> = ({ productsId, cost }) => {
    const [countProduct, setCountProduct] = useState<number>(1)

    const { isLoggedIn } = useAppSelector(selectLogin)
    const { addProductDispatch } = useCartActions()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value
        if (/^\d*$/.test(value)) {
            setCountProduct(+value)
        }
    }

    const handleCountPlus = (): void => setCountProduct(countProduct + 1)

    const handleCountMinus = (): void => {
        if (countProduct === 0) return
        setCountProduct(countProduct - 1)
    }

    const handleAddProduct = async () => {
        const exactProduct: IProduct = await productService.getExactProduct(
            productsId
        )
        addProductDispatch({
            products: { ...exactProduct, count: countProduct },
            totalCost: cost * countProduct,
            countProduct,
        })
    }

    return (
        <div className={style.container}>
            {isLoggedIn ? (
                <>
                    <div className={style.container_count}>
                        <button
                            className={style.btns}
                            onClick={handleCountPlus}
                        >
                            +
                        </button>
                        <input
                            value={countProduct}
                            onChange={handleInputChange}
                            style={{
                                width: `${
                                    (String(countProduct).length + 1) * 8
                                }px`,
                                textAlign: 'center',
                            }}
                        />
                        <button
                            className={style.btns}
                            onClick={handleCountMinus}
                        >
                            -
                        </button>
                    </div>
                    <Button onClick={handleAddProduct}>
                        Добавить в корзину
                    </Button>
                </>
            ) : (
                <span className={style.container_refusal}>
                    Войдите, чтобы добавить товар в корзину
                </span>
            )}
        </div>
    )
}
