import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import { fetchMovies } from '../../actions';

class App extends Component {
  constructor() {
    super();
    // this.state
  }

  componentDidMount() {
    this.props.dispatch(fetchMovies())
  }

  render() {
    const { error, loading, movies } = this.props;

    if (error) {
      console.log(error);
    }

    if (loading) {
      console.log(loading);
    }
    
    // this.props.movies.movies.map(movie => {
    //   return <h2>{movie.title}</h2>
    // })
    return (
      <div>
        <h1>Oh Hi There...</h1>
        <h2>{this.props.movies.movies[0].title}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  error: state.movies.error
})

export default connect(mapStateToProps)(App);