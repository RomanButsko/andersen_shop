import { PropsWithChildren } from 'react'
import { FC } from 'react'

import style from './Button.module.sass'
import { IButton } from './button.interface'

export const Button: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <button className={`${style.btn} ${className}`} {...rest}>
            {children}
        </button>
    )
}
