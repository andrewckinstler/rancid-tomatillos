import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header.js';
import { logout } from '../../actions/index.js'


describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header
      ratings = {[{rating: 2}, {rating: 3}]}
       />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an object with the user and ratings array', () => {
      const mockState = {
        movies: [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}],
        ratings: [{id: 25, rating: 9}, {id: 27, rating: 4}],
        user: {id: 123, name: 'me'},
        loadingStatus: true,
        someOtherProp: false
      }
      const expected = {
        ratings: [{id: 25, rating: 9}, {id: 27, rating: 4}],
        user: {id: 123, name: 'me'},
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with a logout action when logout() is called', () => {
      const mockDispatch = jest.fn();
      const action = logout();
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.logout();
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })

  })
})
