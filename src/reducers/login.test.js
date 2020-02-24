import { userReducer } from './login.js'

describe('userReducer', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = null;
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state when type is LOADING_MOVIES', () => {
    const mockAction = {
      type: 'ADD_USER',
      user: {name: 'me', id: 123},
    }
    const mockState = null;
    const expected = {name: 'me', id: 123};
    const result = userReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  })
})
