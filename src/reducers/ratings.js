export const ratingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_RATINGS':
      return [...action.ratings];
    case 'POST_RATING':
      return [...action.ratings, action.rating];
    case 'DELETE_RATING':
      return action.ratings.filter(movie => movie.id !== state.id);
    case 'LOGOUT_USER':
      return [];
    default:
      return state;
  }
}
