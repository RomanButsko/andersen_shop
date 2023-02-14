import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { ProductService } from '../../services/ProductCards'
import { IProduct } from '../../types/products'
import { CardBuy } from '../cardBuy/CardBuy'
import { Slider } from '../slider/Slider'
import spinner from './../../assets/Spinner.gif'
import style from './Cards.module.sass'

export const Cards = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    const { getProducts } = ProductService
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts()
            setProducts(products)
            setLoading(false)
        }
        fetchProducts()
    }, [getProducts])

    const handleTiteClick = (productId: number) =>
        navigate(`product/${productId}`)

    const sliceStr = (str: string) => {
        if (str.length > 50) {
            return str.slice(0, 50) + '...'
        }
        return str
    }

    return (
        <div className={style.container}>
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
            {products.map((product) => (
                <div key={product.id} className={style.card}>
                    <div className={style.card_top}>
                        <Slider images={product.images} />
                    </div>
                    <div className={style.card_header}>
                        <h4 onClick={() => handleTiteClick(product.id)}>
                            {product.title}
                        </h4>
                        <i>{product.category.name}</i>
                    </div>
                    <p>{sliceStr(product.description)}</p>
                    <div className={style.card_bottom}>
                        <div>
                            <b>{product.price}</b>$
                        </div>
                        <CardBuy productId={product.id} cost={product.price} />
                    </div>
                </div>
            ))}
        </div>
    )
}
