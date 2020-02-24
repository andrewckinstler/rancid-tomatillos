export const ratingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_RATINGS':
      return [...action.ratings];
    case 'POST_RATING':
      return [...action.ratings, action.rating]
    default:
      return state;
  }
}
