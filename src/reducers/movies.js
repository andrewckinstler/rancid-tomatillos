export const movieReducer = (state = [], action) => {
  console.log(action.type)
  switch (action.type) {
    case 'FETCH_MOVIES_BEGIN': 
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...action.movies,
        loading: false,
        error: null
      }
    case 'FETCH_MOVIES_FAILURE':
      return {
        ...action.movies,
        loading: false,
        error: action.error
      }
    default: 
      return state;
  }
}