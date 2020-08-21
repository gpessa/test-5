import * as mobilenet from "@tensorflow-models/mobilenet";
import React, { useEffect,useState } from 'react';

import LazyImage from './components/LazyImage';
import Upload from './components/Upload';
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

  const onImageLoad = async (event: unknown) => {
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
      {bastards?.map(bastard => (
        <LazyImage key={bastard} src={bastard}/>
      ))}
    </>
  );
}

export default App;
