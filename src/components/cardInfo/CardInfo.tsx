import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { productService } from '../../services/ProductCards'
import { IProduct } from '../../types/products'
import { CardBuy } from '../cardBuy/CardBuy'
import spinner from './../../assets/Spinner.gif'
import style from './CardInfo.module.sass'

export const CardInfo = () => {
    const [products, setProducts] = useState<IProduct | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        if (!id) return
        const fetchData = async () => {
            const response = await productService.getExactProduct(+id)
            if (!response) return navigate('*')
            setProducts(response)
            setLoading(false)
        }
        fetchData()
    }, [id])

    return (
        <main className={style.container}>
            {loading && (
                <div className={style.container_loading}>
                    <span>Идет загрузка...</span>
                    <img
                        src={spinner}
                        className={style.container_loading__spinner}
                        alt="spinner"
                    />
                </div>
            )}
            {products && (
                <>
                    <div className={style.container_photos}>
                        <button
                            onClick={() => navigate(-1)}
                            className={style.container_back}
                        >
                            Назад
                        </button>
                        <img
                            src={products.image}
                            alt="productImg"
                            className={style.container_img}
                        />
                    </div>
                    <div className={style.container_right}>
                        <div className={style.container_right__header}>
                            <h1>{products.title}</h1>
                            <span>{products.category}</span>
                        </div>
                        <div className={style.container_right__descr}>
                            <i>Description:</i>
                            <p>{products.description}</p>
                        </div>
                        <div className={style.container_right__price}>
                            <span
                                className={style.container_right__price__cost}
                            >
                                {products.price}$
                            </span>
                            <div className={style.container_right__price__buy}>
                                <CardBuy
                                    cost={products.price}
                                    productsId={products.id}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    )
}
