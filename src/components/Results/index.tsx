import React from 'react';
import LazyImage from '../LazyImage';
import Button from '../Button';
import styled from 'styled-components';

interface ResultsProps {
  onReset: () => unknown;
  breed: string;
  results: string[];
}

export const ResultsBreed = styled.h1`
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
`;

export const ResultsButton = styled(Button)`
  margin-left: 20px;
  margin-right: -10px;
  margin-top: -10px;
`;

export const ResultsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;

  & > * {
    width: 41%;
    margin-top: 4%;

    @media only screen and (min-width: 768px) {
      margin: 0;
      box-sizing: border-box;
      width: 22%;
      margin-top: 4%;
    }
  }

`;


const Results: React.FC<ResultsProps> = ({
  results,
  breed,
  onReset,
}): JSX.Element => {
  return (
    <div>
      <ResultsBreed>
        {breed}
        <ResultsButton onClick={onReset} variant="secondary">
          cancel
        </ResultsButton>
      </ResultsBreed>
      <ResultsList>
        {results.map((result) => (
          <LazyImage key={result} src={result} />
        ))}
      </ResultsList>
    </div>
  );
};

export default Results;
