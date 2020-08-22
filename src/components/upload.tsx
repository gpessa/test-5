import React, { ChangeEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';

import uploadIcon from '../assets/upload-icon.svg'
import Round from "./round"

const UploadContainer = styled.label`
  background-image: url(${uploadIcon});
  background-position: center;
  background-size: 90%;
  border: 3px dashed var(--brown);
  border-radius: 50%;
  margin: 10px;
  overflow: hidden;
  transition: border-color 0.2s;
  width: 100%;

  &:hover,
  &.UploadContainer--hover {
    border: 6px dashed var(--darkBrown);
  }
`
  
const UploadInput = styled.input`
  bottom: 0;
  cursor: pointer;
  left: 0;    
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

interface UploadProps {
  onChange: (image: File) => unknown
}

const Upload: React.FC<UploadProps> = ({ onChange }): JSX.Element => {
  const labelRef = useRef<HTMLLabelElement>(null)

  const onFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target

    if (files === null) return;

    onChange(files[0])
  }
  
  const addHover = (): void => {
    labelRef.current?.classList.add('UploadContainer--hover')
  }
  
  const removeHover = (): void => {
    labelRef.current?.classList.remove('UploadContainer--hover')
  }

  useEffect(() => {
    const div = labelRef.current

    if (div === null) return;

    div.addEventListener('dragenter', addHover)
    div.addEventListener('dragleave', removeHover)
    div.addEventListener('drop', removeHover)

    return (): void => {
      div.removeEventListener('dragenter', addHover)
      div.removeEventListener('dragleave', removeHover)
      div.removeEventListener('drop', removeHover)
    }
  })

  return (
    <Round text={'Drag & Drop an image!'}>
      <UploadContainer ref={labelRef}>
        <UploadInput
          type="file"
          multiple={false}
          onChange={onFileChange}
          accept="image/*"
        />
      </UploadContainer>
    </Round>
  );
}

export default Upload