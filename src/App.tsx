import React from 'react';

import { Preview, Round, Loader, Upload, Results } from './components';
import useMonster from './hooks/useMonster';

const Root: React.FC = (): JSX.Element => {
  const {
    step,
    error,
    preview,
    results,
    breed,
    setImage,
    searchPictures,
    reset,
  } = useMonster();
  
  switch (step) {
    case 'error':
      return <Round title={error} />;

    case 'loading':
      return <Loader />;

    case 'upload':
      return <Upload onChange={setImage} />;

    case 'preview':
      return (
        <Preview src={preview!} onProceed={searchPictures} onCancel={reset} />
      );

    case 'result':
      return <Results results={results!} breed={breed!} onReset={reset} />;
  }
};

export default Root;
