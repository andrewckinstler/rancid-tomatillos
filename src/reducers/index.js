import { movieReducer } from './movies.js';
import { combineReducers } from 'redux';

// Purpose: to export a single reducer function called Root Reducer

const rootReducer = combineReducers({
  movies: movieReducer
})

export default rootReducer;