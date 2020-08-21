import * as mobilenet from "@tensorflow-models/mobilenet";
import React, { useEffect,useState } from 'react';

import LazyImage from './components/LazyImage';
import Upload from './components/Upload';
require('@tensorflow/tfjs');

const App: React.FC = () => {
  const [model, setModel] = useState<mobilenet.MobileNet>()
  const [file, setFile] = useState<File>()
  const [breed, setBreed] = useState<string>()
  const [bastards, setBastards] = useState<string[]>([])
  
  const loadModel = async () => {
    const loadedModel = await mobilenet.load()
    setModel(loadedModel)
  }
  
  const setImage = (newFile: File) => {
    setFile(newFile)
  }

  const onImageLoad = async (imageDom: HTMLImageElement) => {
    const { className } = (await model!.classify(imageDom))[0]
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
      {file && <img src={URL.createObjectURL(file)} onLoad={e => onImageLoad(e.currentTarget)} />}
      {name}
      {bastards.map(bastard => <LazyImage key={bastard} src={bastard}/>)}
    </>
  );
}

export default App;
