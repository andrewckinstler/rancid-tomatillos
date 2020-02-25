import React, { Component } from 'react';
import './MovieDetail.scss';
import { connect } from 'react-redux';
import { postRating, deleteRating, getRatings, getMovies } from '../../actions';
import { postRatingToApi, deleteRatingFromApi, fetchRatingsAPI, fetchMoviesAPI } from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

export class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      currentRating: 0,
      visualClass: false
    }
  }

  handleRatingChange = e => {
    this.setState({[e.target.name]: parseInt(e.target.value)})
  }

  loadRatings() {
    fetchRatingsAPI(this.props.user.id)
    .then(data => {
      this.props.getRatings(data.ratings)
    })
  }

  loadMovies() {
    fetchMoviesAPI()
    .then(data => {
      this.props.getMovies(data.movies)
    })
  }

  submitRating() {
    let movieId = this.props.selectedMovie.id
    let newRating = this.state.currentRating
    let oldRating = this.props.ratings.find(rating => this.props.selectedMovie.id === rating.movie_id);
    let userId = this.props.user.id
    if (!oldRating) {
      postRatingToApi(movieId, newRating, userId)
        .then(res => {
          this.loadRatings()
          this.loadMovies()
        })
    } else {
      deleteRatingFromApi(oldRating.id, userId)
        .then(res => {
          postRatingToApi(movieId, newRating, userId)
            .then(res => {
              this.loadRatings()
              this.loadMovies()
            })
        })
    }
    this.setState({visualClass: true});
  }

  clearRating() {
    let oldRating = this.props.ratings.find(rating => this.props.selectedMovie.id === rating.movie_id);
    let userId = this.props.user.id
    deleteRatingFromApi(oldRating.id, userId)
      .then(res => {
        this.loadRatings()
        this.loadMovies()
      })
    this.setState({currentRating: 0})
  }

  componentDidMount() {
    let previousRating = this.props.ratings.find(rating => this.props.selectedMovie.id === rating.movie_id);
    if(previousRating) {
      this.setState({currentRating: previousRating.rating});
    }
  }

  render() {
    let {title, id, average_rating, poster_path, backdrop_path, release_date, overview} = this.props.selectedMovie
    const backgroundStyling = {
      background: `linear-gradient(to top, rgba(42, 42, 42, .75), rgba(42, 42, 42, 0)), url(${backdrop_path}) no-repeat center top`,
      backgroundSize: 'cover',
    }

    return (
      <section className='movie-detail' style={backgroundStyling} key={id}>
        <div className='movie-detail__info' >
          <img 
            className='movie-detail__poster' 
            alt={`movie poster for ${title}`} 
            src={poster_path} />
          <div className='movie-detail__details'>
            <h2 className='movie-detail__title'>{title}</h2>
            <p className='movie-detail__release-date'>
              {`Release Date: ${release_date}`}
            </p>
            <p className='movie-detail__average-rating'>
              {`Average Rating: ${average_rating.toFixed(2)}`}
            </p>
          {this.props.user ?
          <>
            <div className='movie-detail__user-rating'>
              <label for='currentRating'>User Rating: { this.state.currentRating || '-' }</label>
              <p className={this.state.visualClass ? 'movie-detail__rating-active' : 'movie-detail__rating-inactive'}>
                Thank you for rating!
              </p>
            </div>
            <input 
              className='movie-detail__rating-input' 
              onChange={this.handleRatingChange} 
              value={this.state.currentRating} 
              type='range' 
              min='1' 
              max='10' 
              id='user-rating' 
              name='currentRating' 
              value={this.state.currentRating} />
            <div className='movie-detail__rating-buttons'>
              <button
                className='movie-detail__button movie-detail__delete-rating'
                onClick={() => this.clearRating()}>
                  Delete Rating
              </button>
              <button 
                className='movie-detail__button movie-detail__add-rating' 
                onClick={() => this.submitRating()}>
                  Add Rating
              </button>
            </div>
          </>
          : null}
            <p className='movie-detail__overview'>{overview}</p>
          </div>
        </div>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  ratings: state.ratings,
  user: state.user
})

export const mapDispatchToProps = dispatch => ({
  postRating: (rating) => dispatch(postRating(rating)),
  deleteRating: (rating) => dispatch(deleteRating(rating)),
  getRatings: (ratings) => dispatch(getRatings(ratings)),
  getMovies: (movies) => dispatch(getMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

MovieDetail.propTypes = {
  movies: PropTypes.array,
  ratings: PropTypes.array,
  user: PropTypes.object
};
