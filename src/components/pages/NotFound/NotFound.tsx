import { useNavigate } from 'react-router'

import { Button } from '../../../ui/button/Button'
import errorLogo from './../../../assets/oops-404.avif'
import style from './NotFound.module.sass'

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <img src={errorLogo} alt="notFound" />
            <p className={style.container_descr}>
                Что-то пошло не так. Данной страницы не существует
            </p>
            <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
    )
}
