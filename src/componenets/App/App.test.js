import React from 'react';
import { loadingMovies, getMovies, getRatings } from '../../actions/index.js'
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
        loadingStatus: true,
        someOtherProp: false
      }
      const expected = {
        movies: [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}],
        ratings: [{id: 25, rating: 9}, {id: 27, rating: 4}],
        loadingStatus: true,
        user: {id: 123, name: 'me'},
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with a loadingMovies action when loadingMovies is called', () => {
      const mockDispatch = jest.fn();
      const action = loadingMovies(true);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.loadingMovies(true);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })

    it('should call dispatch with a getMovies action when getMovies is called', () => {
      const mockDispatch = jest.fn();
      const movies = [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}]
      const action = getMovies(movies);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.getMovies(movies);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })

    it.skip('should call dispatch with a getRatings action when getRatings is called', () => {
      const mockDispatch = jest.fn();
      const ratings = [{id: 25, rating: 9}, {id: 27, rating: 4}];
      const action = getRatings(ratings);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.getRatings(ratings);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })
})
