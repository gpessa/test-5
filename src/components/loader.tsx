import React from 'react';

import loaderIcon from "../assets/loader-icon.svg";
import Round from "./round";

const Loader: React.FC = (): JSX.Element => (
  <Round text="Loading the puppies..." iconSrc={loaderIcon}/>
)

export default Loader