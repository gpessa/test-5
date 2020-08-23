import React from 'react';
import Upload from '.';
import { mount } from 'enzyme';

describe('Upload', () => {
  test('onChange function is called', () => {
    const mockCallBack = jest.fn();

    mount(<Upload onChange={mockCallBack} />)
      .find('input')
      .simulate('change', {
        target: {
          files: ['dummyValue.something'],
        },
      });

    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(mockCallBack.mock.calls[0][0]).toBe('dummyValue.something');
  });
});
