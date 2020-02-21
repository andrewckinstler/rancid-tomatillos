import React, { Component } from 'react';
import { MovieCard } from '../../componenets/MovieCard/MovieCard.js'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieContainer.scss'
import { fetchMoviesAPI } from '../../apiCalls/apiCalls.js'
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
    console.log(this.props.movies[0]);
    let movieCards = this.props.movies.map(movie => {
      return <MovieCard
                title={movie.title}
                posterPath={movie.poster_path}
                id={movie.id}
                averageRating={movie.average_rating}
             />
    })

    if (this.props.loadingStatus) {
      return <Loading />
    }
    return (
      <section className='movie-container'>
        {movieCards}
      </section>
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
