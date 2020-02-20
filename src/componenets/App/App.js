import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import MovieContainer from '../../containers/MovieContainer/MovieContainer.js'
import MovieDetail from '../MovieDetail/MovieDetail.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Oh Hi There...</h1>
        <MovieContainer />
        {/* <MovieDetail /> */}
        <h2>{ 'fewhfiuweh'}</h2>
      </div>
    )
  }
}

export default App;
