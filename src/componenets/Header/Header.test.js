import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})