import { movieReducer } from './movies.js';
import { combineReducers } from 'redux';
import { loadingReducer } from './loading.js';
import { ratingsReducer } from './ratings.js';

// Purpose: to export a single reducer function called Root Reducer

const rootReducer = combineReducers({
  movies: movieReducer,
  ratings: ratingsReducer,
  loadingStatus: loadingReducer
})

export default rootReducer;
