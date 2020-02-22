import React, { Component } from 'react';
import { MovieCard } from '../../componenets/MovieCard/MovieCard.js'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieContainer.scss'


class MovieContainer extends Component {
  
  render() {
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

// const mapDispatchToProps = dispatch => ({
//   loadingMovies: (loadingStatus) => dispatch(loadingMovies(loadingStatus)),
//   getMovies: (movies) => dispatch(getMovies(movies)),
//   getRatings: (ratings) => dispatch(getRatings(ratings))
// })

export default connect(mapStateToProps)(MovieContainer);
