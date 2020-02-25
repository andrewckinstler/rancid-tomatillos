import React, { Component } from 'react';
import { MovieCard } from '../../componenets/MovieCard/MovieCard.js'
import { connect } from 'react-redux';
import './MovieContainer.scss';
import PropTypes from 'prop-types';

export class MovieContainer extends Component {

  render() {
    let movieCards = this.props.movies.map(movie => {
      return <MovieCard
        key={movie.id}
        title={movie.title}
        posterPath={movie.poster_path}
        id={movie.id}
        averageRating={movie.average_rating}
        userRating={this.props.ratings.find(rating => movie.id === rating.movie_id)}
      />
    })

    return (
      <section className='movie-container'>
        {movieCards}
      </section>
    )
  }
}

export const mapStateToProps = state => {
  return {
    movies: state.movies,
    ratings: state.ratings,
    loadingStatus: state.loadingStatus
  }
}

export default connect(mapStateToProps)(MovieContainer);

MovieContainer.propTypes = {
  movies: PropTypes.array,
  ratings: PropTypes.array,
  loadingStatus: PropTypes.bool
};
