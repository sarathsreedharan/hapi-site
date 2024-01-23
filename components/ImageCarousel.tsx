"use client"

import React, { useState, useEffect } from "react"

type ImageCarouselProps = {
    images: string[]
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [prevImageIndex, setPrevImageIndex] = useState(images.length - 1)

    useEffect(() => {
        const timer = setInterval(() => {
            setPrevImageIndex(currentImageIndex)
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
        }, 3000) // Change image every 3 seconds

        return () => clearInterval(timer)
    }, [images, currentImageIndex])

    return (
        <div className="w-full h-screen relative overflow-hidden">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Carousel Image ${index + 1}`}
                    className={`absolute w-full h-full object-cover transition-transform duration-700 ease-in-out ${
                        index === currentImageIndex
                            ? "transform translate-x-0"
                            : index === prevImageIndex
                            ? "transform -translate-x-full"
                            : "transform translate-x-full"
                    }`}
                />
            ))}
        </div>
    )
}

export default ImageCarousel
