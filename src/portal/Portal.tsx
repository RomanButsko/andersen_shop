import { useEffect } from 'react'
import { PropsWithChildren } from 'react'
import { FC } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'

const Portal: FC<PropsWithChildren> = ({ children }) => {
    const [container] = useState(() => document.createElement('div'))

    useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return ReactDOM.createPortal(children, container)
}

export default Portal
