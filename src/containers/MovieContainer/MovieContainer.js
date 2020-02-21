import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadingMovies, getMovies, getRatings } from '../../actions';
import { fetchMoviesAPI, fetchRatingsAPI } from '../../apiCalls/apiCalls.js';
import { Loading } from '../../componenets/Loading/Loading.js';

class MovieContainer extends Component {
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
      return <Loading />
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
    ratings: state.ratings,
    loadingStatus: state.loadingStatus
  }
}

const mapDispatchToProps = dispatch => ({
  loadingMovies: (loadingStatus) => dispatch(loadingMovies(loadingStatus)),
  getMovies: (movies) => dispatch(getMovies(movies)),
  getRatings: (ratings) => dispatch(getRatings(ratings))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
