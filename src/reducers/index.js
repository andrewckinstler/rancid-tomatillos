import { movieReducer } from './movies.js';
import { combineReducers } from 'redux';
import { loadingReducer } from './loading.js'
import { userReducer } from './login.js'
import { ratingsReducer } from './ratings.js';
import { errorReducer } from './error.js';

// Purpose: to export a single reducer function called Root Reducer

const rootReducer = combineReducers({
  movies: movieReducer,
  loadingStatus: loadingReducer,
  user: userReducer,
  ratings: ratingsReducer,
  error: errorReducer
})

export default rootReducer;
