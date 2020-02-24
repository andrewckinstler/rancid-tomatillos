import { ratingsReducer } from './ratings.js'

describe('ratingsReducer', () => {
  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = ratingsReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return the correct state when type is GET_RATINGS', () => {
    const mockAction = {
      type: 'GET_RATINGS',
      ratings: [{title: 'Parasite', rating: 10}, {title: 'Sonic', rating: 4}],
      rating: {title: 'Parasite', id: 25, rating: 10}
    }
    const mockState = [{title: 'Parasite', rating: 10}, {title: 'Sonic', rating: 6}];
    const expected = [{title: 'Parasite', rating: 10}, {title: 'Sonic', rating: 4}];
    const result = ratingsReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  })

  it('should return the correct state when type is POST_RATING', () => {
    const mockAction = {
      type: 'POST_RATING',
      ratings: [{title: 'Parasite', rating: 10}, {title: 'Sonic', rating: 6}],
      rating: {title: '1917', id: 22, rating: 10}
    }
    const mockState = [{title: 'Parasite', rating: 10}, {title: 'Sonic', rating: 6}, {title: 'Parasite', id: 25, rating: 9} ];
    const expected = [{title: 'Parasite', rating: 10}, {title: 'Sonic', rating: 6}, {title: '1917', id: 22, rating: 10} ];
    const result = ratingsReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  })
})
