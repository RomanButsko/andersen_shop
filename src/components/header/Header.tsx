import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { useLoginActions } from '../../hooks/useDispatch'
import { useAppSelector } from '../../hooks/useSelector'
import { Login } from '../../login/Login'
import { selectLogin } from '../../store/login/loginSlice'
import { Cart } from '../cart/Cart'
import exit from './../../assets/exit.svg'
import logo from './../../assets/headlogo.jpeg'
import signin from './../../assets/signin.svg'
import style from './Header.module.sass'
import { navItems } from './navItems'

export const Header = () => {
    const [login, setLogin] = useState<boolean>(false)
    const { isLoggedIn } = useAppSelector(selectLogin)
    const { handleLoginStatus } = useLoginActions()

    useEffect(() => {
        setLogin(false)
    }, [])

    const handleLogOut = () => {
        handleLoginStatus(false)
        setLogin(false)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_line}></div>
            <div className={style.wrapper_navbar}>
                <Link to={'/'}>
                    <img src={logo} alt="logo" height="50px" />
                </Link>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                className={style.wrapper_navbar__link}
                                to={item.link}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {isLoggedIn && <Cart />}
                <div className={style.wrapper_account}>
                    {!isLoggedIn ? (
                        <div onClick={() => setLogin(!login)}>
                            <button>Войти</button>
                            <img
                                src={signin}
                                alt="signIn"
                                className={style.wrapper_account__signin}
                            />
                        </div>
                    ) : (
                        <div onClick={handleLogOut}>
                            <button>Выйти</button>
                            <img
                                src={exit}
                                className={style.wrapper_account__exit}
                                alt="exit"
                            />
                        </div>
                    )}
                </div>
            </div>
            {login && <Login setLogin={setLogin} />}
        </div>
    )
}
