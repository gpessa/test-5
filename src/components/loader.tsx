import React from 'react';

import loaderIcon from "../assets/loader-icon.svg";
import Round from "./round";
import styled from 'styled-components';

const LoaderIcon = styled.div`
  background-image: url(${loaderIcon});
  background-position: center;
  background-size: 90%;
  height: 100%;
  width: 100%;
`

const Loader: React.FC = (): JSX.Element => (
  <Round text="Loading the puppies...">
    <LoaderIcon />
  </Round>
)

export default Loader