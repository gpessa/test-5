import React from 'react';

import Round from '../Round';
import styled from 'styled-components';
import Button from '../Button';

export const PreviewImage = styled.div`
  background-image: url(${({ image }: { image: string }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export const PreviewCancel = styled(Button)`
  left: 0;
  top: 100%;
  position: absolute;
  transform: translateY(-50%);

  @media only screen and (min-width: 768px) {
    left: -50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PreviewProceed = styled(Button)`
  right: 0;
  top: 100%;
  position: absolute;
  transform: translateY(-50%);

  @media only screen and (min-width: 768px) {
    right: -50%;
    top: 50%;
    transform: translate(50%, -50%);
  }
`;

interface PreviewProps {
  src: string;
  onCancel: () => void;
  onProceed: () => void;
}

const Preview: React.FC<PreviewProps> = ({
  src,
  onProceed,
  onCancel,
}): JSX.Element => (
  <Round text="Do you want to proceed?">
    <PreviewCancel variant="secondary" onClick={onCancel}>
      Cancel
    </PreviewCancel>
    <PreviewImage image={src} />
    <PreviewProceed onClick={onProceed}>Proceed</PreviewProceed>
  </Round>
);

export default Preview;
