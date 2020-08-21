import React, { useState, useEffect } from 'react';
import Upload from './components/Upload';
import * as mobilenet from "@tensorflow-models/mobilenet";
require('@tensorflow/tfjs');

function App() {
  const [model, setModel] = useState<mobilenet.MobileNet>()
  const [file, setFile] = useState<File>()
  const [breed, setBreed] = useState<string>()
  const [bastards, setBastards] = useState<string[]>()
  
  const loadModel = async () => {
    const model = await mobilenet.load()
    setModel(model)
  }
  
  const setImage = (file: File) => {
    setFile(file)
  }

  const onImageLoad = async (event: any) => {
    const { className } = (await model!.classify(event.target))[0]
    setBreed(className)
  };

  const searchBastards = async (breed: string) => {
    const resp = await (fetch(`https://dog.ceo/api/breed/${breed}/images`))
    const { message } = await resp.json()
    setBastards(message)
  }

  useEffect(() => {
    breed && searchBastards(breed)
  }, [breed])

  useEffect(() => {
    loadModel()
  }, [])
  

  return (
    <>
      {model && 'Loaded'}
      <Upload onChange={setImage} />
      {file && <img src={URL.createObjectURL(file)} onLoad={onImageLoad} />}
      {name && name}
      {bastards && bastards.map(bastard => (
        <img key={bastard} src={bastard}/>
      ))}
    </>
  );
}

export default App;
