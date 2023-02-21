import label from './../../assets/headlogo.jpeg'
import style from './AboutUs.module.sass'

export const AboutUs = () => {
    return (
        <div className={style.container}>
            <p className={style.descr}>
                Мы с вами уже 18 лет и зарекомендовали себя как надежный
                онлайн-гипермаркет. Мы поддерживаем высокий уровень
                интернет-торговли, что подтверждают присужденные нам премии. В
                нашем каталоге представлено более чем 1 000 000 наименований
                товаров. Количество наших клиентов продолжает расти, и мы делаем
                все, чтобы оправдать ваше доверие. Спасибо, что выбрали нас!
            </p>
            <img src={label} alt="andersen" />
        </div>
    )
}
