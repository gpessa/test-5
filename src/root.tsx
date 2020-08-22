
import React from 'react';

import Loader from './components/loader';
import Round from './components/round';
import Upload from './components/upload';
import Results from './components/results';
import useMonster from './hooks/use-monser';
import Preview from './components/preview';

const Root: React.FC = (): JSX.Element => {
  const { step, preview, results, breed, setImage, searchPictures, reset } = useMonster()

  switch (step) {
    case 'error':   return <Round text={'Something went wrong'} />

    case 'loading': return <Loader />
    
    case 'upload':  return <Upload onChange={setImage} />
    
    case 'preview': return <Preview src={preview} onProceed={searchPictures} onCancel={reset}/>
    
    case 'result':  return <Results results={results!} breed={breed!} onReset={reset} />
  }
}

export default Root;
