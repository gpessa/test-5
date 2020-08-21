import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import uploadIcon from '../assets/upload-icon.svg'
import Button from "./button"
import Round from "./round"

const UploadContainer = styled.label`
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`
  
const UploadInput = styled.input`
  bottom: 0;
  left: 0;  
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

interface UploadProps {
  onProceed: (image: File) => unknown
}

const Upload: React.FC<UploadProps> = ({ onProceed }): JSX.Element => {
  const [file, setFile] = useState<File>()
  const reference = React.createRef<HTMLInputElement>()

  const onFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target

    if (files === null) return;

    setFile(files[0])
  }
  
  const addHover = (): void => {
    reference.current?.classList.add('hover')
  }
  
  const removeHover = (): void => {
    reference.current?.classList.remove('hover')
  }

  useEffect(() => {
    const div = reference.current

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
    <Round iconSrc={file ? URL.createObjectURL(file) : uploadIcon} text={file ? undefined : 'Drag & Drop an image'}>
      <UploadContainer ref={reference}>
        <UploadInput
          type="file"
          multiple={false}
          onChange={onFileChange}
          accept="image/jpeg, image/png, .jpg, .jpeg, .png"
        />
      </UploadContainer>
      {file && <Button onClick={(): void => { onProceed(file) }} style={{ zIndex: 1 }}>Proceed</Button>}
    </Round>
  );
}

export default Upload