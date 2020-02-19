import { fetchMoviesAPI } from '../apiCalls/apiCalls.js';

export const fetchMovies = () => {
  return dispatch => {
    dispatch(loadMoviesBegin())
    return fetchMoviesAPI()
      .then(json => {
        console.log(json)
        dispatch(loadMoviesSuccess(json))
        return json
      })
      .catch(error => dispatch(loadMoviesFailure(error)))
    }
}

export const loadMoviesBegin = () => ({
  type: 'FETCH_MOVIES_BEGIN'
});

export const loadMoviesSuccess = (movies) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  movies
});

export const loadMoviesFailure = (error) => ({
  type: 'FETCH_MOVIES_FAILURE',
  error
});

