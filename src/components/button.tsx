import styled from 'styled-components'

const Button = styled.button`
  background-color: var(--orange);
  border: none;
  border-radius: 50%;
  color: var(--white);
  cursor: pointer;
  font-family: var(--fontSanSerif);
  font-size: ${(props: ButtonProps) => {
    switch (props.variant) {
      case 'secondary': return '13px'
      default: return '20px'
    }
  }};
  height: ${(props: ButtonProps) => {
    switch (props.variant) {
      case 'secondary': return '80px'
      default: return '120px'
    }
  }};
  text-transform: uppercase;
  width: ${(props: ButtonProps) => {
    switch (props.variant) {
      case 'secondary': return '80px'
      default: return '120px'
    }
  }};
  &:hover {
    background-color: var(--darkBrown);
  }
`

interface ButtonProps {
 variant?: 'primary' | 'secondary'
}

export default Button