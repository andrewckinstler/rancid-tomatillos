export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'ERROR_MSG': 
      return action.error;
    default: 
      return state;
  }
}