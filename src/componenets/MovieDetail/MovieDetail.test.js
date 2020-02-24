import React from 'react';
import { shallow } from 'enzyme';
import { MovieDetail, mapStateToProps, mapDispatchToProps } from './MovieDetail.js';

describe('MovieDeatil', () => {
  let wrapper, mockMovie;
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
    wrapper = shallow(<MovieDetail selectedMovie={mockMovie} />)
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
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})
