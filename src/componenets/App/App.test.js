import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App.js';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})