import { movieReducer } from './movies.js';
import { combineReducers } from 'redux';
import { loadingReducer } from './loading.js'
import { userReducer } from './login.js'

// Purpose: to export a single reducer function called Root Reducer

const rootReducer = combineReducers({
  movies: movieReducer,
  loadingStatus: loadingReducer,
  user: userReducer
})

export default rootReducer;
