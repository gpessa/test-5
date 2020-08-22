import React from 'react';
import LazyImage from './lazy-image';
import Button from './button';
import styled from 'styled-components';

interface ResultsProps {
  onReset: () => unknown
  breed: string
  results: string[]
}

const ResultsBreed = styled.h1`
  background: var(--white);
  border-radius: 40px;
  bottom: 30px;
  display: inline-flex;
  height: 60px;
  line-height: 56px;
  margin: 0;
  padding: 0 41px;
  position: fixed;
  right: 30px;
  z-index: 1;
`

const ResultsButton = styled(Button)`
  margin-left: 20px;
  margin-right: -10px;
  margin-top: -10px;
`

const Results: React.FC<ResultsProps> = ({ results, breed, onReset }): JSX.Element => {
  return (
    <div>
      <ResultsBreed>
        {breed}
        <ResultsButton onClick={onReset} variant='secondary'>cancel</ResultsButton>
      </ResultsBreed>
      {results.map(result => <LazyImage key={result} src={result} />)}
    </div>
  );
}

export default Results