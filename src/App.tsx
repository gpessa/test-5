import React, { useState, useEffect } from 'react';
import Upload from './components/Upload';
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

function App() {
  const [model, setModel] = useState<mobilenet.MobileNet>()
  const [file, setFile] = useState<File>()

  const loadModel = async () => {
    const model = await mobilenet.load()
    setModel(model)
  }
  
  const setImage = (file: File) => {
    setFile(file)
  }

  const onImageLoad = async (event: any) => {
    const predictions = await model!.classify(event.target)
    console.log(predictions)
  };

  useEffect(() => {
    loadModel()
  }, [])
  

  return (
    <>
      {model && 'Loaded'}
      <Upload onChange={setImage} />
      {file && <img src={URL.createObjectURL(file)} onLoad={onImageLoad} />}
    </>
  );
}

export default App;
