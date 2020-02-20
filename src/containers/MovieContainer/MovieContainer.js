import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadingMovies, getMovies } from '../../actions';
import { fetchMoviesAPI } from '../../apiCalls/apiCalls.js'

class MovieContainer extends Component {
  componentDidMount() {
    fetchMoviesAPI()
    .then(data => {
      this.props.getMovies(data.movies)
      this.props.loadingMovies(true)
    })
  }
  render() {
    if (this.props.loadingStatus) {
      return (<div><h2>loading now</h2></div>)
    }
    return (
      <div>
        <h2>{this.props.movies[0].title}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    loadingStatus: state.loadingStatus
  }
}

const mapDispatchToProps = dispatch => ({
  loadingMovies: (loadingStatus) => dispatch(loadingMovies(loadingStatus)),
  getMovies: (movies) => dispatch(getMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
