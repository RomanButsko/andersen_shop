import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { productService } from '../../services/ProductCards'
import { IProduct } from '../../types/products'
import { CardBuy } from '../cardBuy/CardBuy'
import spinner from './../../assets/Spinner.gif'
import style from './Cards.module.sass'

export const Cards = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    const { getProducts } = productService
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts()
            setProducts(products)
            setLoading(false)
        }
        fetchProducts()
    }, [])

    const handleGetProducts = async () => {
        const newProducts = await getProducts()
        setProducts([...products, ...newProducts])
        setLoading(false)
    }

    const handleTitleClick = (productId: number) =>
        navigate(`product/${productId}`)

    const sliceStr = (str: string) => {
        if (str.length > 50) {
            return str.slice(0, 50) + '...'
        }
        return str
    }
    return (
        <div className={style.container}>
            {loading ? (
                <div className={style.container_loading}>
                    <span>Идет загрузка...</span>
                    <img
                        src={spinner}
                        className={style.container_loading__spinner}
                        alt="spinner"
                    />
                </div>
            ) : (
                <>
                    {products.map((product, index) => (
                        <div key={index} className={style.card}>
                            <div className={style.card_top}>
                                <img
                                    src={product.image}
                                    alt="cardImg"
                                    className={style.card_img}
                                />
                            </div>
                            <div className={style.card_header}>
                                <h4
                                    onClick={() => handleTitleClick(product.id)}
                                >
                                    {product.title}
                                </h4>
                                <i>{product.category}</i>
                            </div>
                            <p>{sliceStr(product.description)}</p>
                            <div className={style.card_bottom}>
                                <div>
                                    <b>{product.price}</b>$
                                </div>
                                <CardBuy
                                    productsId={product.id}
                                    cost={product.price}
                                />
                            </div>
                        </div>
                    ))}
                    <div className={style.container_more}>
                        <button
                            onClick={handleGetProducts}
                            className={style.container_more__btn}
                        >
                            Загрузить еще...
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
