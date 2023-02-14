import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useLoginContext } from '../hooks/useContext'
import Portal from '../portal/Portal'
import { Modal } from '../ui/modal/Modal'
import { useOutside } from './../hooks/useOutside'
import { ILogin } from './login.interface'
import style from './Login.module.sass'

export const Login: FC<ILogin> = ({ setLogin }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()
    const { changeLoginStatus } = useLoginContext()
    const { ref, isShow, setIsShow } = useOutside(true)

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value)

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value)

    useEffect(() => {
        if (!isShow) setLogin(false)
    }, [isShow, setLogin])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email || !password)
            return setError('Пожалуйста, заполните все поля')
        if (email === 'admin@gmail.com' && password === 'admin') {
            changeLoginStatus(true)
            setIsShow(false)
            navigate('/')
        } else setError('Введенные данные не совпадают')
    }

    return (
        <>
            {isShow && (
                <Portal>
                    <Modal
                        ref={ref}
                        title="Войти"
                        show={isShow}
                        onClose={setIsShow}
                    >
                        <form className={style.form} onSubmit={handleSubmit}>
                            <div className={style.form_field}>
                                <label htmlFor="email">
                                    Введите Вашу{' '}
                                    <span className={style.form_field__name}>
                                        почту
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="test@gmail.com"
                                />
                            </div>
                            <div className={style.form_field}>
                                <label htmlFor="password">
                                    Введите Ваш{' '}
                                    <span className={style.form_field__name}>
                                        пароль
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="*******"
                                />
                            </div>
                            {error && (
                                <p className={style.form_error}>{error}</p>
                            )}
                            <div className={style.form_btns}>
                                <button
                                    onClick={() => setIsShow(false)}
                                    className={style.form_btns__close}
                                >
                                    Отмена
                                </button>
                                <button className={style.form_btns__send}>
                                    Войти
                                </button>
                            </div>
                        </form>
                    </Modal>
                </Portal>
            )}
        </>
    )
}
