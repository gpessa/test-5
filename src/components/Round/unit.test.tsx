import React from 'react';
import Round from '.';
import { mount } from 'enzyme';

describe('Round', () => {
  test('title and children are rendered', () => {
    const elem = mount(
      <Round title="sdadsada">
        <small>babidi</small>
      </Round>
    )

    expect(elem.find('h3').contains("sdadsada"));
    expect(elem.find('small').length).toBe(1);
  });
});
