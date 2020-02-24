import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of GET_MOVIES', () => {
    const movies = [{title: 'Parasite'}, {title: 'Sonic'}];
    const expectedAction = {
      type: 'GET_MOVIES',
      movies: movies
    }
    const result = actions.getMovies(movies)
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of LOADING_MOVIES', () => {
    const loadingStatus = true;
    const expectedAction = {
      type: 'LOADING_MOVIES',
      loadingStatus: false
    }
    const result = actions.loadingMovies(loadingStatus)
    expect(result).toEqual(expectedAction)
    })

    it('should have a type of ADD_USER', () => {
      const user = {name: 'me', id: 123}
      const expectedAction = {
        type: 'ADD_USER',
        user: user
      }
      const result = actions.addUser(user)
      expect(result).toEqual(expectedAction)
    })

    it('should have a type of GET_RATINGS', () => {
      const ratings = [{title: 'Parasite', rating: 10}, {title: 'Sonic', rating: 5}]
      const expectedAction = {
        type: 'GET_RATINGS',
        ratings: ratings
      }
      const result = actions.getRatings(ratings)
      expect(result).toEqual(expectedAction)
    })

    it('should have a type of POST_RATING', () => {
      const rating = {title: 'Parasite', id: 25, rating: 10}
      const expectedAction = {
        type: 'POST_RATING',
        rating: rating
      }
      const result = actions.postRating(rating)
      expect(result).toEqual(expectedAction)
    })
});
