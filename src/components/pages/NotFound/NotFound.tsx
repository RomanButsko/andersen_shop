import errorLogo from './../../../assets/oops-404.jpg.avif'
import style from './NotFound.module.sass'

export const NotFound = () => {
    return (
        <div className={style.container}>
            <img src={errorLogo} alt="notFound" />
            <p className={style.container_descr}>
                Что-то пошло не так. Данной страницы не существует
            </p>
        </div>
    )
}
