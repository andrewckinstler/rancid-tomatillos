import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of GET_MOVIES', () => {
    const movies = [{title: 'Parasite'}, {title: 'Sonic'}];
    const expectedAction = {
      type: 'GET_MOVIES',
      movies
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
        user
      }
      const result = actions.addUser(user)
      expect(result).toEqual(expectedAction)
    })

    it('should have a type of GET_RATINGS', () => {
      const ratings = [{title: 'Parasite', rating: 10}, {title: 'Sonic', rating: 5}]
      const expectedAction = {
        type: 'GET_RATINGS',
        ratings
      }
      const result = actions.getRatings(ratings)
      expect(result).toEqual(expectedAction)
    })

    it('should have a type of POST_RATING', () => {
      const rating = {title: 'Parasite', id: 25, rating: 10}
      const expectedAction = {
        type: 'POST_RATING',
        rating
      }
      const result = actions.postRating(rating)
      expect(result).toEqual(expectedAction)
    })

    it('should have a type of DELETE_RATING', () => {
      const rating = {title: 'Parasite', id: 25, rating: 10}
      const expectedAction = {
        type: 'DELETE_RATING',
        rating
      }
      const result = actions.deleteRating(rating)
      expect(result).toEqual(expectedAction)
    })

    it('should have a type of LOGOUT_USER', () => {
      const user = null
      const expectedAction = {
        type: 'LOGOUT_USER',
        user
      }
      const result = actions.logout()
      expect(result).toEqual(expectedAction)
    })

    it('should have a type of ERROR_MSG', () => {
      const error = 'this is an error message'
      const expectedAction = {
        type: 'ERROR_MSG',
        error
      }
      const result = actions.errorMsg(error)
      expect(result).toEqual(expectedAction)
    })
});
