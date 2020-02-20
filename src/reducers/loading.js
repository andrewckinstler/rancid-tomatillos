export const loadingReducer = (state = true, action) => {
  switch(action.type) {
    case 'LOADING_MOVIES':
      return action.loadingStatus;
    default:
      return state;
  }
}
