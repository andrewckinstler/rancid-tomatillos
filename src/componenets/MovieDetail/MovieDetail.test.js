import React from 'react';
import { shallow } from 'enzyme';
import { MovieDetail, mapStateToProps, mapDispatchToProps } from './MovieDetail.js';
import { postRating, deleteRating, getRatings, getMovies } from '../../actions/index.js'


describe('MovieDeatil', () => {
  let wrapper, mockMovie, mockUser;
  beforeEach(() => {
    mockMovie = {
      "id": 21,
      "title": "Sonic the Hedgehog",
      "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
      "release_date": "2020-02-12",
      "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
      "average_rating": 7
  }
    mockUser = {id: 123, name: 'me', email: 'me@me.com'}
    wrapper = shallow(<MovieDetail selectedMovie={mockMovie} ratings={[{rating: 1}, {rating: 3}]} user={ mockUser } />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  describe('mapStateToProps', () => {
    it('should return an object with the movies and ratings array', () => {
      const mockState = {
        movies: [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}],
        ratings: [{id: 25, rating: 9}, {id: 27, rating: 4}],
        user: {id: 123, name: 'me'},
        loadingStatus: true
      }
      const expected = {
        movies: [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}],
        ratings: [{id: 25, rating: 9}, {id: 27, rating: 4}],
        user: {id: 123, name: 'me'}
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch with the postRating action when postRating is invoked', () => {
      const mockDispatch = jest.fn();
      const rating = {id: 123, rating: 4};
      const action = postRating(rating);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.postRating(rating);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
    it('should call dispatch with the deleteRating action when deleteRating is invoked', () => {
      const mockDispatch = jest.fn();
      const rating = {id: 123, rating: 4};
      const action = deleteRating(rating);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.deleteRating(rating);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
    it('should call dispatch with the getRatings action when getRatings is invoked', () => {
      const mockDispatch = jest.fn();
      const rating = {id: 123, rating: 4};
      const action = getRatings(rating);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.getRatings(rating);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
    it('should call dispatch with the getMovies action when getMovies is invoked', () => {
      const mockDispatch = jest.fn();
      const movies = [{title: 'Parasite'}, {title: '1917'}];
      const action = getMovies(movies);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.getMovies(movies);
      expect(mockDispatch).toHaveBeenCalledWith(action);
    })
  })
  describe('Unit Testing', () => {
    it('should handle changes to the rating in state', () => {
      const mockEvent = {target: {name: 'currentRating', value: '5'}};
      const expected = 5;
      wrapper.instance().handleRatingChange(mockEvent);
      expect(wrapper.state('currentRating')).toEqual(expected);
    })
    it('should call submitRating when Add Rating is clicked', () => {
      wrapper.instance().submitRating = jest.fn();
      wrapper.find('.movie-detail__add-rating').simulate('click');
      expect(wrapper.instance().submitRating).toHaveBeenCalled();
    })
    it('should call submitRating when Add Rating is clicked', () => {
      wrapper.instance().clearRating = jest.fn();
      wrapper.find('.movie-detail__delete-rating').simulate('click');
      expect(wrapper.instance().clearRating).toHaveBeenCalled();
    })
  })
})
