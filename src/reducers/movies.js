export const movieReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return [...action.movies];
    default:
      return state;
  }
}
