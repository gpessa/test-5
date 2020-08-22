import * as mobilenet from '@tensorflow-models/mobilenet';
import { useEffect, useState } from 'react';
require('@tensorflow/tfjs');

interface State {
  breed?: string;
  error?: string;
  model?: mobilenet.MobileNet;
  preview?: string;
  results?: string[];
  step: 'loading' | 'upload' | 'preview' | 'result' | 'error';
}

interface UseMonster extends State {
  reset: () => void;
  searchPictures: () => void;
  setImage: (file: File) => void;
}

const getPictures = async (breed: string): Promise<string[]> => {
  const resp = await fetch(`https://dog.ceo/api/breed/${breed}/images`);

  return (await resp.json()).message;
};

const useMonster = (): UseMonster => {
  const [monster, setMonster] = useState<State>({
    step: 'loading',
  });

  const loadModel = async (): Promise<void> => {
    try {
      const model = await mobilenet.load();
      setMonster(
        (old: State): State => ({
          ...old,
          model,
          step: 'upload',
        }),
      );
    } catch (error) {
      setMonster(
        (old: State): State => ({
          ...old,
          step: 'error',
        }),
      );
    }
  };

  const searchPictures = async (): Promise<void> => {
    const img = new Image();
    img.setAttribute('src', '')

    img.addEventListener(
      'load',
      async (): Promise<void> => {
        const [{ className: breed }] = await monster.model.classify(img);
        const results = await getPictures(breed);

        setMonster(
          (old: State): State => ({
            ...old,
            breed,
            results,
            step: 'result',
          }),
        );
      },
    );

    img.setAttribute('src', monster.preview!);
  };


  const setImage = (file: File): void => setMonster(
    (old: State): State => ({
      ...old,
      preview: URL.createObjectURL(file),
      step: 'preview',
    }),
  );

  const reset = (): void => setMonster(
    (old: State): State => ({
      ...old,
      preview: undefined,
      step: 'upload',
    }),
  );

  useEffect((): void => {
    void loadModel();
  }, []);

  return {
    ...monster,
    reset,
    searchPictures,
    setImage,
  };
};

export default useMonster;
