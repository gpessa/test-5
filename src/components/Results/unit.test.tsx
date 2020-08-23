import React from 'react';
import { mount } from 'enzyme';
import Results, { ResultsBreed } from '.';

describe('Results', () => {
  const mockCallBack = jest.fn();
  const breed = 'humans';
  const results: string[] = [];
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <Results results={results} breed={breed} onReset={mockCallBack} />,
    );
  });

  test('Title is displayed', () => {
    const title = wrapper.find(ResultsBreed);

    expect(title.length).toBe(1);
    expect(title.contains(breed)).toEqual(true);
  });

  test('Reset callback is called', () => {
    wrapper.find(ResultsBreed).find('button').simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
