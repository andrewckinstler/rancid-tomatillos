import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import MovieContainer from '../../containers/MovieContainer/MovieContainer.js'
import Login from '../Login/Login'
import MovieDetail from '../MovieDetail/MovieDetail.js';
import Header from '../Header/Header.js';
import { fetchMoviesAPI, fetchRatingsAPI } from '../../apiCalls/apiCalls.js';
import { loadingMovies, getMovies, getRatings } from '../../actions';
import { Loading } from '../Loading/Loading.js';


export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    Promise.all([this.loadMovies(), this.loadRatings()])
  }

  loadMovies() {
    fetchMoviesAPI()
    .then(data => {
      this.props.getMovies(data.movies)
      this.props.loadingMovies(true)
    })
  }

  loadRatings() {
    fetchRatingsAPI()
    .then(data => {
      this.props.getRatings(data.ratings)
    })
  }

  render() {
    if (this.props.loadingStatus) {
      return (
      <main className='main'>
        <Header />
        <Loading />
      </main>
      )
    }
    return (
      <main className='main'>
        <Header />
        <div className='content'>
          <Switch>
            <Route 
              path='/login'
              render={() => <Login />}
            />
            <Route
              path='/movies/:id'
              render={({ match })=>< MovieDetail selectedMovie=
                  {this.props.movies.find(movie => movie.id === parseInt(match.params.id))}/>}/>
            <Route
              path='/'
              render={()=>< MovieContainer />} />
          </Switch>
        </div>
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  ratings: state.ratings,
  loadingStatus: state.loadingStatus
})

export const mapDispatchToProps = dispatch => ({
  loadingMovies: (loadingStatus) => dispatch(loadingMovies(loadingStatus)),
  getMovies: (movies) => dispatch(getMovies(movies)),
  getRatings: (ratings) => dispatch(getRatings(ratings))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
