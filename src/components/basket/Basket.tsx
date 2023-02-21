import { ChangeEvent, FC, MouseEvent } from 'react'

import { useCartActions } from '../../hooks/useDispatch'
import { useAppSelector } from '../../hooks/useSelector'
import { selectCart } from '../../store/cart/cartSlice'
import { IProductCart } from '../../types/products'
import { Button } from '../../ui/button/Button'
import deleteSvg from './../../assets/delete.svg'
import style from './Basket.module.sass'

export const Basket: FC<{ products: IProductCart[] }> = ({ products }) => {
    const { totalCost } = useAppSelector(selectCart)
    const { increase, reduce, remove, removeAll } = useCartActions()

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        product: IProductCart
    ): void => {
        const { count, price } = product
        const value = e.target.value
        if (/^\d*$/.test(value) && +value < 100_000) {
            if (count < +value) {
                const newCount = +value - count
                increase({
                    totalCost: newCount * price,
                    countProduct: newCount,
                    products: product,
                    countChange: newCount,
                })
            } else if (count >= 1) {
                const newCount = count - +value
                reduce({
                    totalCost: newCount * price,
                    countProduct: newCount,
                    products: product,
                    countChange: newCount,
                })
            }
        }
    }
    const handleCountPlus = (product: IProductCart): void =>
        increase({
            totalCost: product.price,
            countProduct: 1,
            products: product,
        })

    const handleCountMinus = (product: IProductCart): void => {
        if (!product.count) return
        reduce({ totalCost: product.price, countProduct: 1, products: product })
    }

    const handleDeleteProduct = (
        e: MouseEvent,
        product: IProductCart
    ): void => {
        const { count, price } = product
        remove({
            totalCost: count * price,
            countProduct: count,
            products: product,
        })
    }

    return (
        <div className={style.container}>
            <table className={style.container_table}>
                <thead className={style.container_table__head}>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Цена за 1ед.</th>
                        <th>Количество</th>
                        <th>Общая сумма</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <button
                                    className={
                                        style.container_table__btn__count
                                    }
                                    onClick={() => handleCountPlus(product)}
                                >
                                    +
                                </button>
                                <input
                                    value={product.count}
                                    onChange={(e) =>
                                        handleInputChange(e, product)
                                    }
                                    style={{
                                        width: `${
                                            (String(product.count).length + 1) *
                                            8
                                        }px`,
                                        textAlign: 'center',
                                    }}
                                />
                                <button
                                    className={
                                        style.container_table__btn__count
                                    }
                                    onClick={() => handleCountMinus(product)}
                                >
                                    -
                                </button>
                            </td>
                            <td>
                                {(product.price * product.count).toFixed(2)}
                            </td>
                            <td>
                                <img
                                    src={deleteSvg}
                                    alt="delete"
                                    onClick={(e) =>
                                        handleDeleteProduct(e, product)
                                    }
                                    className={style.container_table__delete}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={style.container_footer}>
                <h4>Общая стоимость {totalCost.toLocaleString()}$</h4>
                <button
                    onClick={removeAll}
                    className={style.container_footer__clear}
                >
                    Очистить
                </button>
                <Button className={style.container_footer__pay} disabled>
                    Оплатить
                </Button>
            </div>
        </div>
    )
}
