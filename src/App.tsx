import React from 'react';

import { Round, Upload, Results, RoundImage } from './components';
import useDog from './store/dog/hook';

const Root: React.FC = (): JSX.Element => {
  const { step, error, reset, setImage, searchPictures, preview, results, breed } = useDog()


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
          <RoundImage src={require('./assets/icon-loader.svg')}/>
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

    case 'results':
      return <Results results={results!} breed={breed!} onReset={reset} />;
  }
};

export default Root;
