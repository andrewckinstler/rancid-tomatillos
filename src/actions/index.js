export const getMovies = movies => ({
  type: 'GET_MOVIES',
  movies
});

export const loadingMovies = loadingStatus => ({
  type: 'LOADING_MOVIES',
  loadingStatus: !loadingStatus
});


export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const getRatings = ratings => ({
  type: 'GET_RATINGS',
  ratings
});

export const postRating = rating => ({
  type: 'POST_RATING',
  rating
});

export const logout = () => ({
  type: 'LOGOUT_USER',
  user: null
})

export const errorMsg = error => ({
  type: 'ERROR_MSG',
  error
})