export const getMovies = movies => ({
  type: 'GET_MOVIES',
  movies
})

export const loadingMovies = loadingStatus => ({
  type: 'LOADING_MOVIES',
  loadingStatus: !loadingStatus
})

export const getRatings = ratings => ({
  type: 'GET_RATINGS',
  ratings
})

export const postRating = rating => ({
  type: 'POST_RATING',
  rating
})