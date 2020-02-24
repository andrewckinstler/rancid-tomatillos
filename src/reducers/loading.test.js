import { loadingReducer } from './loading.js'

describe('loadingReducer', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = true;
    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state when type is LOADING_MOVIES', () => {
    const mockAction = {
      type: 'LOADING_MOVIES',
      loadingStatus: false,
    }
    const mockState = true;
    const expected = false;
    const result = loadingReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  })
})
