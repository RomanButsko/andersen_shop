import { useNavigate, useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'

import { CardBuy } from '../cardBuy/CardBuy'
import spinner from './../../assets/Spinner.gif'
import style from './CardInfo.module.sass'

export const CardInfo = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const { product, loading } = useProduct({ id: Number(id) })

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
            {product && (
                <>
                    <div className={style.container_photos}>
                        <button
                            onClick={() => navigate(-1)}
                            className={style.container_back}
                        >
                            Назад
                        </button>
                        <img
                            src={product.image}
                            alt="productImg"
                            className={style.container_img}
                        />
                    </div>
                    <div className={style.container_right}>
                        <div className={style.container_right__header}>
                            <h1>{product.title}</h1>
                            <span>{product.category}</span>
                        </div>
                        <div className={style.container_right__descr}>
                            <i>Description:</i>
                            <p>{product.description}</p>
                        </div>
                        <div className={style.container_right__price}>
                            <span
                                className={style.container_right__price__cost}
                            >
                                {product.price}$
                            </span>
                            <div className={style.container_right__price__buy}>
                                <CardBuy
                                    cost={product.price}
                                    productsId={product.id}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    )
}
