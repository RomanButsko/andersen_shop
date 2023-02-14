import style from './PopUp.module.sass'
import { FC, useState } from 'react'

export const PopUp: FC<{ message: string }> = ({ message }) => {
    const [show, setShow] = useState<boolean>(true)

    setTimeout(() => {
        setShow(false)
    }, 15000)

    const handleClose = () => {
        setShow(false)
    }
    return (
        <>
            {show && (
                <div className={style.container}>
                    <span
                        className={style.container_close}
                        onClick={handleClose}
                    >
                        &times;
                    </span>
                    <p className={style.container_content}>{message}</p>
                </div>
            )}
        </>
    )
}
