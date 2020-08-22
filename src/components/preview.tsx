import React from 'react';

import Round from "./round";
import styled from 'styled-components';
import Button from './button';

const PreviewImage = styled.div`
  background-image: url(${({ src }: PreviewProps) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`

const PreviewCancel = styled(Button)`
  left: -50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
`

const PreviewProceed = styled(Button)`
  position: absolute;
  right: -50%;
  top: 50%;
  transform: translate(50%,-50%);
`

interface PreviewProps {
  src?: string
  onCancel: () => void
  onProceed: () => void
}

const Preview: React.FC<PreviewProps> = ({ src, onProceed, onCancel }): JSX.Element => (
  <Round text="Do you want to proceed?">
    <PreviewCancel variant="secondary" onClick={onCancel}>Cancel</PreviewCancel>
    <PreviewImage src={src} />
    <PreviewProceed onClick={onProceed}>Proceed</PreviewProceed>
  </Round>
)

export default Preview