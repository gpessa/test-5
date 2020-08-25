import React from 'react';

import { Round, Upload, Results, RoundImage } from './components';
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
      return (
        <Round title={error} onBack={reset}>
          <RoundImage src={require('./assets/icon-error.svg')}/>
        </Round>
      )

    case 'loading':
      return (
        <Round title="Loading the puppies...">
          <RoundImage src={require('./assets/loader-icon.svg')}/>
        </Round>
      )

    case 'upload':
      return (
        <Round title="Drag &amp; Drop an image!">
          <Upload onChange={setImage} />
        </Round>
      )

    case 'preview':
      return (
        <Round title="Do you want to proceed?" onNext={searchPictures} onBack={reset}>
          <RoundImage src={preview!} />
        </Round>
      )

    case 'result':
      return <Results results={results!} breed={breed!} onReset={reset} />;
  }
};

export default Root;
