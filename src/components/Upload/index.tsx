import React, { ChangeEvent } from 'react';

const Upload: React.FC<{
  onChange: (image: File) => any
}> = ({
  onChange
}) => {

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      onChange(files[0])
    }
  }

  return (
    <div>
      <input
        type="file"
        multiple={false}
        onChange={onFileChange}
        accept="image/jpeg, image/png, .jpg, .jpeg, .png"
      /> 
    </div>
  );
}

export default Upload