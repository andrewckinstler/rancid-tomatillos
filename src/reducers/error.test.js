import { errorReducer } from './error.js';

describe('errorReducer', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = '';
    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return a string with a message when type is ERROR_MSG', () => {
    const mockAction = {
      type: 'ERROR_MSG',
      error: 'Some Error'
    };
    const mockState = 'Different error message';
    const expected = 'Some Error';
    const result = errorReducer(mockState, mockAction)

    expect(result).toEqual(expected);
  })
})