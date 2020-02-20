export const getMovies = movies => ({
  type: 'GET_MOVIES',
  movies
})

export const loadingMovies = loadingStatus => ({
  type: 'LOADING_MOVIES',
  loadingStatus: !loadingStatus
})
