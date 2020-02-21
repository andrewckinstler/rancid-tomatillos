export const ratingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_RATINGS':
      return [...action.ratings];
    default:
      return state;
  }
}