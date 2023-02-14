import { Dispatch, SetStateAction } from 'react'

export interface ISlider {
    images: string[]
    setSelectedImage?: Dispatch<SetStateAction<number>>
    selectedImage?: number
}
