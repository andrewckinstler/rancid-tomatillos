import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of GET_MOVIES', () => {
    const movies = [{title: 'Parasite'}, {title: 'Sonic'}];
    const expectedAction = {
      type: 'GET_MOVIES',
      movies: movies
    }
    const result = actions.getMovies(movies)
    expect(result).toEqual(expectedAction)
  });

  it('shoul')
});
