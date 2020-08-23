import React from 'react';
import Preview, { PreviewCancel, PreviewImage, PreviewProceed } from '.';
import { mount } from 'enzyme';

describe('Preview', () => {
  const mockCallBackCancel = jest.fn();
  const mockCallBackProceed = jest.fn();
  const src = 'ciccio';
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(
      <Preview
        src={src}
        onCancel={mockCallBackCancel}
        onProceed={mockCallBackProceed}
      />,
    );
  });

  test('Renders element with the right image', () => {
    const elem = wrapper.find(PreviewImage);

    expect(
      getComputedStyle(elem.getDOMNode()).getPropertyValue('background-image'),
    ).toBe(`url(${src})`);
  });

  test('Cancel function is called if cancel button pressed', () => {
    wrapper.find(PreviewCancel).simulate('click');

    expect(mockCallBackCancel.mock.calls.length).toEqual(1);
  });

  test('Proceed function is called if proceed button pressed', () => {
    wrapper.find(PreviewProceed).simulate('click');

    expect(mockCallBackProceed.mock.calls.length).toEqual(1);
  });
});
