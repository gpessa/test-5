import React, { useState, useEffect } from 'react';
import Upload from './components/Upload';
import * as mobilenet from "@tensorflow-models/mobilenet";
require('@tensorflow/tfjs');

function App() {
  const [model, setModel] = useState<mobilenet.MobileNet>()
  const [file, setFile] = useState<File>()
  const [name, setName] = useState<string>()
  

  const loadModel = async () => {
    const model = await mobilenet.load()
    setModel(model)
  }
  
  const setImage = (file: File) => {
    setFile(file)
  }

  const onImageLoad = async (event: any) => {
    const { className } = (await model!.classify(event.target))[0]
    setName(className)
  };

  useEffect(() => {
    loadModel()
  }, [])
  

  return (
    <>
      {model && 'Loaded'}
      <Upload onChange={setImage} />
      {file && <img src={URL.createObjectURL(file)} onLoad={onImageLoad} />}
      {name && name}
    </>
  );
}

export default App;
