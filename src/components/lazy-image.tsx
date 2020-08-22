import React, { useEffect,useRef, useState } from 'react'
import styled from 'styled-components'

import imageIcon from "../assets/image-icon.svg"

const Image = styled.div`
  background-image: url(${(properties: { image: string }): string => properties.image });
  background-position: center;
  background-size: cover;
  border: 25px solid var(--darkBrown);
  border-radius: 50%;
  display: inline-flex;
  height: 200px;
  margin: 10px;
  width: 200px;
`

const placeHolder = imageIcon

interface LazyImageProps {
  src: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src }): JSX.Element => {
  const [imageSource, setImageSource] = useState(placeHolder)
  const imageReference = useRef<HTMLImageElement>()

  useEffect((): void => {
    // let observer: IntersectionObserver

    // if (imageReference.current && imageSource === placeHolder) {
    const observer = new IntersectionObserver(
      (entries): void => {
        entries.forEach((entry): void => {
          // When image is visible in the viewport + rootMargin
          if (entry.intersectionRatio > 0 || entry.isIntersecting) {
            setImageSource(src)
          }
        })
      },
      {
        rootMargin: '75%',
        threshold: 0.01,
      }
    )
    if (imageReference.current)
      
    observer.observe(imageReference.current)
    // }

    return () => {
      if (imageReference.current)
        
      observer.unobserve(imageReference.current)
    }
  }, [imageSource])

  return <Image ref={imageReference} image={imageSource} />
}

export default LazyImage