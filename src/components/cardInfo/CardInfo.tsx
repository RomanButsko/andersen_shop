import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ProductService } from '../../services/ProductCards'
import { IProduct } from '../../types/products'
import { CardBuy } from '../cardBuy/CardBuy'
import { Slider } from '../slider/Slider'
import spinner from './../../assets/Spinner.gif'
import style from './CardInfo.module.sass'

export const CardInfo = () => {
    const [products, setProducts] = useState<IProduct>()
    const [selectedImage, setSelectedImage] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (!id) return
        const fetchData = async () => {
            const response = await ProductService.getExactProduct(+id)
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
                        <Slider
                            images={products.images}
                            setSelectedImage={setSelectedImage}
                            selectedImage={selectedImage}
                        />
                        <div className={style.container_photos__list}>
                            {products.images.map((image, index) => (
                                <img
                                    src={image}
                                    key={index}
                                    alt={`photo ${index}`}
                                    onClick={() => setSelectedImage(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={style.container_right}>
                        <div className={style.container_right__header}>
                            <h1>{products.title}</h1>
                            <span>{products.category.name}</span>
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
                                    productId={products.id}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    )
}
