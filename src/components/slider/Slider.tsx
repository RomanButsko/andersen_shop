import { FC, useState } from 'react'
import { ISlider } from './slider.interface'
import style from './Slider.module.sass'

export const Slider: FC<ISlider> = ({
    images,
    setSelectedImage,
    selectedImage,
}) => {
    const [currentPhoto, setCurrentPhoto] = useState<number>(0)

    const handleNextSlide = () => {
        setSelectedImage
            ? setSelectedImage((prevIndex) => (prevIndex + 1) % images.length)
            : setCurrentPhoto((prevIndex) => (prevIndex + 1) % images.length)
    }
    const handlePrevSlide = () => {
        setSelectedImage
            ? setSelectedImage(
                  (prevIndex) => (prevIndex + images.length - 1) % images.length
              )
            : setCurrentPhoto(
                  (prevIndex) => (prevIndex + images.length - 1) % images.length
              )
    }
    return (
        <>
            <button className={style.button} onClick={handlePrevSlide}>
                &lt;
            </button>
            {images.map((image, index) => (
                <img
                    src={image}
                    key={index}
                    alt={''}
                    className={style.image}
                    style={{
                        display: selectedImage
                            ? index === selectedImage
                                ? 'block'
                                : 'none'
                            : index === currentPhoto
                            ? 'block'
                            : 'none',
                    }}
                />
            ))}
            <button
                className={`${style.button} ${style.button_next}`}
                onClick={handleNextSlide}
            >
                &gt;
            </button>
        </>
    )
}
