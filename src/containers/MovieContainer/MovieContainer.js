import React, { Component } from 'react';
import { MovieCard } from '../../componenets/MovieCard/MovieCard.js'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieContainer.scss'
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
      return (<div><h2>loading now</h2></div>)
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
    loadingStatus: state.loadingStatus
  }
}

const mapDispatchToProps = dispatch => ({
  loadingMovies: (loadingStatus) => dispatch(loadingMovies(loadingStatus)),
  getMovies: (movies) => dispatch(getMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
