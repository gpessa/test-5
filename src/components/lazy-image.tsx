import React, { useEffect,useRef as useReference,useState } from 'react'
import styled from 'styled-components'

import imageIcon from "../assets/image-icon.svg"

const Image = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-image: url(${(properties: { image: string }): string => properties.image });
  background-size: cover;
  background-position: center;
  display: inline-flex;
  margin: 10px;
  border: 25px solid var(--darkBrown);
`

const placeHolder = imageIcon

interface LazyImageProps {
  src: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src }): JSX.Element => {
  const [imageSource, setImageSource] = useState(placeHolder)
  // Const [imageReference, setImageReference] = useState<HTMLImageElement | null>(null)
  const imageReference = useReference<HTMLImageElement>()

  useEffect((): void => {
    let observer: IntersectionObserver

    if (imageReference.current && imageSource === placeHolder) {
      observer = new IntersectionObserver(
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
      observer.observe(imageReference.current)
    }

    return function cleanup() {
      observer.disconnect()
    }
  }, [imageSource])

  return <Image ref={imageReference} image={imageSource} />
}

export default LazyImage