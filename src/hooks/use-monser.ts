import * as mobilenet from '@tensorflow-models/mobilenet';
import { useEffect, useState } from 'react';
require('@tensorflow/tfjs');

interface UseMonsterState {
  step: 'loading' | 'upload' | 'preview' | 'result' | 'error'
  breed?: string
  error?: string
  model?: mobilenet.MobileNet
  preview?: string
  results?: string[]
}

interface UseMonsterReturn extends UseMonsterState {
  searchPictures: () => void
  setImage: (file: File) => void
  reset: () => void
} 

const getPictures = async (breed: string): Promise<string[]> => {
  const resp = await fetch(`https://dog.ceo/api/breed/${breed}/images`);

  return (await resp.json()).message;
};


const useMonster = (): UseMonsterReturn => {
  const [monster, setMonster] = useState<UseMonsterState>({
    step: 'loading',
  });

  const loadModel = async (): Promise<void> => {
    try {
      const model = await mobilenet.load();
      setMonster(
        (old: UseMonsterState): UseMonsterState => ({
          ...old,
          step: 'upload',
          model
        }),
      );
    } catch (error) {
      setMonster(
        (old: UseMonsterState): UseMonsterState => ({
          ...old,
          step: 'error'
        }),
      );
    }

  };

  const setImage = (file: File): void => {
    const preview = URL.createObjectURL(file);

    setMonster(
      (old: UseMonsterState): UseMonsterState => ({
        ...old,
        step: 'preview',
        preview,
      }),
    );
  };

  const searchPictures = async (): Promise<void> => {
    const img = new Image();
    img.src = '';

    img.addEventListener('load', async (): Promise<void> => {
      const [{ className: breed }] = await monster.model.classify(img);
      const results = await getPictures(breed);

      setMonster((old: UseMonsterState): UseMonsterState => ({
        ...old,
        step: 'result',
        breed,
        results,
      }));
    });

    img.src = monster.preview;
  };

  const reset = (): void => {
    setMonster(
      (old: UseMonsterState): UseMonsterState => ({
        ...old,
        step: 'upload',
        preview: undefined
      }),
    );
  }

  useEffect((): void => {
    void loadModel();
  }, []);

  return {
    ...monster,
    searchPictures,
    setImage,
    reset
  };
};

export default useMonster