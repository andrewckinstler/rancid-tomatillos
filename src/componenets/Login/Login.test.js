import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from './Login.js';
import { addUser } from '../../actions/index.js'


describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the addUser action when addUser is called', () => {
      const mockDispatch = jest.fn();
      const user = {id: 123, name: 'me'};
      const action = addUser(user);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.addUser(user);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })
})
