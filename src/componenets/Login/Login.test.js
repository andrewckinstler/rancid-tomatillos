import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps, mapStateToProps } from './Login.js';
import { addUser, errorMsg, getRatings } from '../../actions/index.js'


describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an object with an error and a user', () => {
      const mockState = {
        movies: [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}],
        ratings: [{id: 25, rating: 9}, {id: 27, rating: 4}],
        user: {id: 123, name: 'me'},
        loadingStatus: true,
        error: 'this is an error message',
        someOtherProp: false
      }
      const expected = {
        error: 'this is an error message',
        user: {id: 123, name: 'me'},
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
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
    it('should call dispatch with the errorMsg action when errorMsg is called', () => {
      const mockDispatch = jest.fn();
      const error = 'this is an error message';
      const action = errorMsg(error);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.errorMsg(error);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
    it('should call dispatch with the getRatings action when getRatings is called', () => {
      const mockDispatch = jest.fn();
      const rating = {rating_id: 798, rating: 9}
      const action = getRatings(rating);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.getRatings(rating);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })

  describe('Unit Testing', () => {
    it('should update the state when user types into field', () => {
      const startState = {email: '', password: ''};
      wrapper = shallow(<Login />);
      wrapper.setState(startState);
      const mockEvent = {target: {name: 'email', value: 'charlie@turing.io'}};
      const expected = {email: 'charlie@turing.io'};
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('email')).toEqual(expected.email);
    })
    it('should call handleClick when the button is clicked', () => {
      wrapper = shallow(<Login />);
      wrapper.instance().handleClick = jest.fn();
      wrapper.find('.login-form__button').simulate('click');
      expect(wrapper.instance().handleClick).toHaveBeenCalled();
    })
  })
})
