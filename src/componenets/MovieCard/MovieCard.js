import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss'
import PropTypes from 'prop-types';

export const MovieCard = ({title, posterPath, id, averageRating, userRating}) => {
  if (!userRating) {
    return (
      <Link className='movie-card' id={id} to={`/movies/${id}`}>
        <img className='poster-img' alt={`movie poster for ${title}`} src={posterPath} />
        <h1 className='movie-card-title'>{title}</h1>
        <footer className='ratings-footer'>
          <h2 className='movie-rating'>{`Avg. Rating: ${averageRating.toFixed(2)}/10`}</h2>
        </footer>
      </Link>
    )
  } else {
    return (
      <Link className='movie-card' id={id} to={`/movies/${id}`}>
        <img className='poster-img' alt={`movie poster for ${title}`} src={posterPath} />
        <h1 className='movie-card-title'>{title}</h1>
        <footer className='ratings-footer'>
          <h2 className='movie-rating'>{`Avg. Rating: ${averageRating.toFixed(2)}/10`}</h2>
          <h2 className='movie-rating user-rating'>{`Your Rating: ${userRating.rating}/10`}</h2>
        </footer>
      </Link>
    )
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  posterPath: PropTypes.string,
  id: PropTypes.number,
  averageRating: PropTypes.number,
  userRating: PropTypes.number
};
