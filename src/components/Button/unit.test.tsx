import React from 'react';
import Button from '.';
import { shallow } from 'enzyme';

describe('Button', () => {
  test('Renders element', () => {
    const text = "I'm a button";
    const button = shallow(<Button>{text}</Button>);

    expect(button.contains(text)).toEqual(true);
    expect(button.type()).toEqual('button');
  });

  test('Click event working', () => {
    const mockCallBack = jest.fn();

    shallow(<Button onClick={mockCallBack}>Ok!</Button>)
      .find('button')
      .simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
