import * as mobilenet from '@tensorflow-models/mobilenet';
import { useEffect,useState } from 'react';
require('@tensorflow/tfjs');

const useTensorflow = () => {
  const [model, setModel] = useState<mobilenet.MobileNet>();
  const loading = Boolean(model) === false;

  const load = async (): Promise<void> => {
    const loadedModel = await mobilenet.load();
    setModel(loadedModel);
  };
  
  const classify = async (image: HTMLImageElement): Promise<string | undefined> => {
    if (model === undefined) return;

    const [{ className }] = await model.classify(image);

    return className
  };
  
  useEffect(() => {
    load();
  }, []);

  return {
    classify,
    loading
  };
}

export default useTensorflow;