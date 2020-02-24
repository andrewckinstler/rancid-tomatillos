import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App.js';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object with the movies and ratings array and a loading status', () => {
      const mockState = {
        movies: [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}],
        ratings: [{id: 25, rating: 9}, {id: 27, rating: 4}],
        user: {id: 123, name: 'me'},
        loadingStatus: true
      }
      const expected = {
        movies: [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}],
        ratings: [{id: 25, rating: 9}, {id: 27, rating: 4}],
        loadingStatus: true
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
  // describe('mapDispatchToProps', () => {
  //   it('should call dispatch with a postRating action when ')
  // })
})
