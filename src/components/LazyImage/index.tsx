import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import iconImage from '../../assets/icon-image.svg';

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
`;

interface LazyImageProps {
  src: string;
}

const LazyImageElement = styled.div.attrs<LazyImageProps>(({ src }) => ({
  style: {
    backgroundImage: `url(${src})`,
    animationDuration: `${Math.random()}s`,
  },
}))<LazyImageProps>`
  background-color: var(--white);
  background-position: center;
  background-size: cover;
  padding-bottom: 100%;
  width: 100%;

  &.jello {
    animation-name: ${jello};
    transform-origin: center;
  }
`;

const LazyImageWrapper = styled.div`
  border: 25px solid var(--darkBrown);
  border-radius: 50%;
  overflow: hidden;
`

const LazyImage: React.FC<LazyImageProps> = ({ src }): JSX.Element => {
  const [imageSource, setImageSource] = useState<string>(iconImage);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries): void => {
        entries.forEach((entry): void => {
          if (entry.intersectionRatio > 0 || entry.isIntersecting) {
            setImageSource(src);
            ref.current?.classList.add('jello');
          }
        });
      },
      {
        rootMargin: '70%',
        threshold: 0.01,
      },
    );
    observer.observe(ref.current!);

    return function cleanup() {
      observer.disconnect();
    };
  }, [src]);

  return (
    <LazyImageWrapper>
      <LazyImageElement src={imageSource} ref={ref} />
    </LazyImageWrapper>
  )
};

export default LazyImage;
