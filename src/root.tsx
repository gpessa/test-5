
import React from 'react';

import Button from './components/button';
import LazyImage from './components/lazy-image';
import Loader from './components/loader';
import Round from './components/round';
import Upload from './components/upload';
import useMonster from './hooks/use-monser';
import Preview from './components/preview';

const Root: React.FC = (): JSX.Element => {
  
  const { step, preview, results, setImage, searchPictures, reset } = useMonster()

  switch (step) {
    case 'error': return <Round text={'Something went wrong'} />

    case 'loading': return <Loader />
    
    case 'upload': return <Upload onChange={setImage} />
    
    case 'preview': return <Preview src={preview} onProceed={searchPictures} onCancel={reset}/>
    
    case 'result': return (
      <>
        {results.map(result => <LazyImage key={result} src={result} />)}
      </>
    )
  }
}

export default Root;
