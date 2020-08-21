import React, { useEffect,useState } from 'react'
import styled from 'styled-components'

const Image = styled.img`
  height: 100px;
  width: 100px;
`

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

export const LazyImage = ({ src }: { src: string}) => {
  const [imageSource, setImageSource] = useState(placeHolder)
  const [imageReference, setImageReference] = useState<Element>()

  useEffect(() => {
    let observer: IntersectionObserver
    let didCancel = false

    if (imageReference && imageSource === placeHolder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              // When image is visible in the viewport + rootMargin
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSource(src)
              }
            })
          },
          {
            rootMargin: '75%',
            threshold: 0.01,
          }
        )
        observer.observe(imageReference)
      } else {
        // Old browsers fallback
        setImageSource(src)
      }
    }

    return (): void => {
      didCancel = true

      // On component unmount, we remove the listner
      if (imageReference && observer && observer.unobserve) {
        observer.unobserve(imageReference)
      }
    }
  })

  return <Image ref={setImageReference} src={imageSource} />
}

export default LazyImage