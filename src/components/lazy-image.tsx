import React, { useEffect, useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import image from "../assets/image-icon.svg"

const jello = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.10, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.10, 1);
  }

  50% {
    transform: scale3d(1.13, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`

const Image = styled.div`
  background-color: var(--white);
  background-image: url(${({ src }: { src?: string }): string => src ? src : image});
  background-position: center;
  background-size: cover;
  border: 25px solid var(--darkBrown);
  border-radius: 50%;
  display: inline-flex;
  height: 200px;
  margin: 10px;
  width: 200px;

  &.jello {
    animation: ${jello} ${() => Math.random() * 2}s linear;
    transform-origin: center;
  }
`

interface LazyImageProps {
  src: string
}

const LazyImage: React.FC<LazyImageProps> = ({ src }): JSX.Element => {
  const [imageSource, setImageSource] = useState<string | undefined>()
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries): void => {
        entries.forEach((entry): void => {
          if (entry.intersectionRatio > 0 || entry.isIntersecting) {
            setImageSource(src)
            ref.current?.classList.add('jello')
          }
        })
      },
      {
        rootMargin: '70%',
        threshold: 0.01,
      }
    )
    observer.observe(ref.current!)

    return function cleanup() {
      observer.disconnect()
    }
  }, [])

  return <Image src={imageSource} ref={ref}/>
}

export default LazyImage