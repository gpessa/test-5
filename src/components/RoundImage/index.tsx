import styled from 'styled-components';

const RoundImage = styled.div.attrs<{ src: string }>(({ src }) => ({
  style: {
    backgroundImage: `url(${src})`,
  },
}))<{ src: string }>`
  width: 100%;
  background-size: cover;
  border-radius: 50%;
`

export default RoundImage