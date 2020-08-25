import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { Upload, Round } from './components';
import useMonster, { UseMonster } from './hooks/useMonster';

jest.mock('./hooks/useMonster');
const mockedUseFooContext = useMonster as jest.Mock<UseMonster>;

describe('App', () => {
  test('Should the Upload screen on the upload step', () => {    
    mockedUseFooContext.mockImplementation(() => ({
      step: 'upload'
    } as UseMonster));

    const app = shallow(<App />);
    expect(app.find(Upload).length).toBe(1);
  });
 
  test('Should the Loader screen on the loading step', () => {
    mockedUseFooContext.mockImplementation(() => ({
      step: 'loading'
    } as UseMonster));

    const app = shallow(<App />);
    expect(app.find(Round).length).toBe(1);
  });
});
