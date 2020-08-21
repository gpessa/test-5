import React from 'react'
import styled, { keyframes } from 'styled-components';


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
`

const RoundWrapper = styled.div`
  animation: ${animation} 2s linear infinite;
  background-color: var(--white);
  background-image: url(${({ iconSrc }: { iconSrc: string }): string => iconSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 25px solid var(--darkBrown);
  border-radius: 50%;
  display: inline-flex;
  height: 250px;
  left: 50%;
  padding: var(--spacingMd);
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
`

const RoundText = styled.h3`
  animation: pulse 2s infinite;
  color: var(--orange);
  font-size: 60px;
  left: 50%;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%) rotate(-25deg);
  transform-origin: center;
  white-space: nowrap;
  &::after {
    background: var(--black);
    content: '';
    display: block;
    height: 3px;
    width: 100%;
  }
`

interface RoundProps {
  iconSrc: string
  text?: string
}

const Round: React.FC<RoundProps> = ({ text, iconSrc, children }): JSX.Element => (
  <RoundWrapper iconSrc={iconSrc}> 
    {text && <RoundText>{text}</RoundText>}
    {children}
  </RoundWrapper>
)

export default Round