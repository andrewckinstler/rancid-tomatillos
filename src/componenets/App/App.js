import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import { fetchMovies, getMovies } from '../../actions';
import { fetchMoviesAPI } from '../../apiCalls/apiCalls.js'
import MovieContainer from '../../containers/MovieContainer/MovieContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Oh Hi There...</h1>
        <MovieContainer />
      </div>
    )
  }
}

export default App;
