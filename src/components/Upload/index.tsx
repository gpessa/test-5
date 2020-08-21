import React, { useState, ChangeEvent } from 'react';

const Upload: React.FC = () => {
  const [image, setImage] = useState<string>()

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      const url = URL.createObjectURL(files[0])
      setImage(url)
    }
  }

  return (
    <div>
      {image && <img src={image} />}
      <input type="file" onChange={onFileChange} /> 
    </div>
  );
}

export default Upload