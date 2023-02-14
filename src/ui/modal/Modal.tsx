import { FC, forwardRef, PropsWithChildren } from 'react'
import { IModal } from './modal.interface'
import style from './Modal.module.sass'

export const Modal: FC<PropsWithChildren & IModal> = forwardRef(
    ({ title, onClose, children, show }, ref: any) => {
        const closeHandler = () => {
            onClose(false)
        }

        return (
            <>
                <div className={style.shadow}> </div>
                <div
                    style={{
                        visibility: show ? 'visible' : 'hidden',
                        opacity: show ? '1' : '0',
                    }}
                    className={style.container}
                    ref={ref}
                >
                    <div className={style.container_wrapper}>
                        <h2 className={style.container_wrapper__title}>
                            {title}
                        </h2>
                        <span
                            className={style.container_wrapper__close}
                            onClick={closeHandler}
                        >
                            &times;
                        </span>
                        <div className={style.container_wrapper__content}>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )
    }
)
