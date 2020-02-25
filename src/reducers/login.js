export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_USER': 
      return action.user;
    case 'LOGOUT_USER': 
      return null;
    default: 
      return state;
  }
}