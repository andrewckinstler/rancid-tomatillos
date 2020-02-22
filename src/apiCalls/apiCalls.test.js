import {fetchMoviesAPI, fetchRatingsAPI, userSignIn} from './apiCalls'

describe('fetchMoviesAPI', () => {
  let mockResponse = [{
    "id": 21,
    "title": "Sonic the Hedgehog",
    "poster_path": "https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original//tCUcf3oNWMW8kwAj3WC6CvIN5ah.jpg",
    "release_date": "2020-02-12",
    "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
    "average_rating": 7
}]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it ('should call fetch with the correct URL', () => {
    fetchMoviesAPI();
    expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
  })

  it ('should return an array of movies', () => {
    fetchMoviesAPI()
      .then(movies => expect(movies).toEqual(mockResponse))
  })

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    });
    
    expect(fetchMoviesAPI()).rejects.toEqual(Error('Failed to retrieve movies.'))
  });

  it('should return an error if the Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to retrieve movies.'))
    })

    expect(fetchMoviesAPI()).rejects.toEqual(Error('Failed to retrieve movies.'))
  })
})

describe('fetchRatingsAPI', () => {
  let mockResponse = [{
      "id": 728,
      "user_id": 24,
      "movie_id": 21,
      "rating": 10,
      "created_at": "2020-02-21T20:47:43.845Z",
      "updated_at": "2020-02-21T20:47:43.845Z"
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it ('should call fetch with the correct URL', () => {
    fetchRatingsAPI();
    expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/users/24/ratings')
  })

  it ('should return an array of ratings', () => {
    fetchRatingsAPI()
      .then(ratings => expect(ratings).toEqual(mockResponse))
  })

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      })
    });
    
    expect(fetchRatingsAPI()).rejects.toEqual(Error('Failed to get ratings.'))
  });

  it('should return an error if the Promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Failed to get ratings.'))
    })

    expect(fetchRatingsAPI()).rejects.toEqual(Error('Failed to get ratings.'))
  })
})