import { movieReducer } from './movies.js'

describe('movieReducer', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = movieReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state when type is GET_MOVIES', () => {
    const movies = [{title: 'Parasite'}, {title: 'Sonic'}];
    const mockAction = {
      type: 'GET_MOVIES',
      movies: movies
    }
    const mockState = [{title: '1917'}, {title: 'Uncut Gems'}] ;
    const expected = [{title: 'Parasite'}, {title: 'Sonic'}];
    const result = movieReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  })
})
