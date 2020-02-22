import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login.js';

describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})