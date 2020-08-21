
import React, { useEffect,useState } from 'react';

import LazyImage from './components/lazy-image';
import Loader from './components/loader';
import Upload from './components/upload';
import useTensorflow from './hooks/use-tensorflow';

const Root: React.FC = (): JSX.Element => {
  const [file, setFile] = useState<File>()
  const [breed, setBreed] = useState<string>()
  const [pictures, setPictures] = useState<string[]>()
  const { classify, loading } = useTensorflow()
  

  const setImage = (newFile: File): void => {
    const newImg = new Image();

    newImg.addEventListener('load', async function () {
      const name = await classify(newImg)
      searchPictures(name)
    })

    newImg.src = URL.createObjectURL(newFile)
  }

  /*
   * Const onImageLoad = async (imageDom: HTMLImageElement): Promise<void> => {
   *   const name = await classify(imageDom)
   *   setBreed(name)
   * };
   */

  const searchPictures = async (id: string): Promise<void> => {
    const resp = await (fetch(`https://dog.ceo/api/breed/${id}/images`))
    const { message } = await resp.json()
    setPictures(message)
  }
  
  // Return <LazyImage src="https://img.rasset.ie/00150743-1600.jpg" />

  if (loading) return <Loader />
 
  if (!pictures) return <Upload onProceed={setImage} />
   
  return pictures.map(picture => <LazyImage key={picture} src={picture} />)
}

export default Root;
