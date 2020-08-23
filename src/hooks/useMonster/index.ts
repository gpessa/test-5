import { useState } from 'react';
import classifierService from '../../services/classifier-service';
import photoService from '../../services/photo-service';

interface State {
  breed?: string;
  error?: string;
  preview?: string;
  results?: string[];
  step: 'loading' | 'upload' | 'preview' | 'result' | 'error';
}

export interface UseMonster extends State {
  reset: () => void;
  searchPictures: () => void;
  setImage: (file: File) => void;
}

const useMonster = (): UseMonster => {
  const [monster, setMonster] = useState<State>({
    step: 'upload',
  });

  const searchPictures = async (): Promise<void> => {
    let breed: string, results: string[], error: string;

    setMonster(
      (old: State): State => ({
        ...old,
        results: undefined,
        breed: undefined,
        step: 'loading',
      }),
    );

    try {
      breed = await classifierService(monster.preview!);
      results = await photoService(breed);
    } catch ({ message }) {
      error = message;
    }

    setMonster(
      (old: State): State => ({
        ...old,
        step: error ? 'error' : 'result',
        results,
        error,
        breed,
      }),
    );
  };

  const setImage = (file: File): void =>
    setMonster(
      (old: State): State => ({
        ...old,
        preview: URL.createObjectURL(file),
        step: 'preview',
      }),
    );

  const reset = (): void =>
    setMonster(
      (old: State): State => ({
        ...old,
        preview: undefined,
        step: 'upload',
      }),
    );

  return {
    ...monster,
    reset,
    searchPictures,
    setImage,
  };
};

export default useMonster;
