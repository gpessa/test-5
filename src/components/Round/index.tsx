import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from '..';
import nextIcon from '../../assets/next-icon.svg';
import backIcon from '../../assets/back-icon.svg';

const animation = keyframes`
	0% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
		transform: translate(-50%, -50%) scale(0.85);
	}
	70% {
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		transform: translate(-50%, -50%) scale(1);
	}
	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		transform: translate(-50%, -50%) scale(0.85);
  }
`;

const RoundWrapper = styled.div`
  animation: ${animation} 2s linear infinite;
  background-color: var(--white);
  border: 25px solid var(--darkBrown);
  border-radius: 50%;
  display: flex;
  height: 250px;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  justify-content: center;
`;

const RoundTitle = styled.h3`
  transform: translate(0%, -120%);
  white-space: pre-wrap;
  text-align: center;
  color: var(--orange);
  font-size: 60px;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: absolute;

  @media only screen and (min-width: 768px) {
    transform: translate(-50%, -50%) rotate(-25deg);
    transform-origin: center;
    top: 50%;
    left: 50%;
    white-space: nowrap;
    
    &::after {
      background: var(--black);
      content: '';
      display: block;
      height: 3px;
      width: 100%;
    }
  }
`;

const RoundPrev = styled(Button)`
  background-image: url(${backIcon});
  background-size: 80%;
  background-position: center;
  font-size: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  z-index: 1;
`

const RoundNext = styled(Button)`
  background-image: url(${nextIcon});
  background-size: 80%;
  background-position: center;
  font-size: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  z-index: 1;
`

interface RoundProps {
  title?: string
  onBack?: Function
  onNext?: Function
}

const Round: React.FC<RoundProps> = ({ title, children, onBack, onNext }): JSX.Element => (
  <RoundWrapper>
    {onBack && (
      <RoundPrev variant="secondary" onClick={() => onBack()}>Previous</RoundPrev>
    )}

    {title && <RoundTitle>{title}</RoundTitle>}

    {children}

    {onNext && (
      <RoundNext onClick={() => onNext()}>Next</RoundNext>
    )}
  </RoundWrapper>
);

export default Round;
