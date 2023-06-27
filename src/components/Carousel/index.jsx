import { useState } from 'react'

function Carousel({ images }) {
    const [current, setCurrent] = useState(0)
    const nextImage = () => {
        setCurrent(current + 1 === images.length ? 0 : current + 1)
    }

    const prevImage = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }
    return (
        <div className="carousel">
            <img
                src={images[current]}
                className="carousel__img"
                alt="carousel-img"
            ></img>
            {images.length !== 1 && (
                <>
                    {' '}
                    <button className="carousel__left-btn" onClick={prevImage}>
                        <svg
                            viewBox="0 0 96 121"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M70.0399 16.425L62.9199 9.34497L23.3599 48.945L62.9599 88.545L70.0399 81.465L37.5199 48.945L70.0399 16.425Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <button className="carousel__right-btn" onClick={nextImage}>
                        <svg
                            viewBox="0 0 96 121"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M25.96 80.9877L33.04 88.0677L72.64 48.4677L33.04 8.86768L25.96 15.9477L58.48 48.4677L25.96 80.9877Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                    <p className="carousel__numbering">
                        {current + 1}/{images.length}
                    </p>
                </>
            )}
        </div>
    )
}

export default Carousel
