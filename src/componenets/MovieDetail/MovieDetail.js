import React, { Component } from 'react';
import './MovieDetail.scss';
import { connect } from 'react-redux';
import { postRating } from '../../actions';

export class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0
    }
  }

  render() {
    let {title, id, average_rating, poster_path, backdrop_path, release_date, overview} = this.props.selectedMovie
    const backgroundStyling = {
      background: `linear-gradient(to top, rgba(42, 42, 42, .75), rgba(42, 42, 42, 0)), url(${backdrop_path}) no-repeat center top`,
      backgroundSize: 'cover',

    }
    return (
      <section className='movie-detail' style={backgroundStyling}>
        <div className='movie-detail__info' >
          <h2 className='movie-detail__title'>{title}</h2>
          <p className='movie-detail__average-rating'>{`Average Rating: ${average_rating}`}</p>
          {this.props.user ? <><label for='user-rating'>User Rating: 6</label> 
          <input type='range' min='1' max='10' id='user-rating' name='user-rating' /></>
          : null}
          <p className='movie-detail__overview'>{overview}</p>
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
  postRating: (rating) => dispatch(postRating(rating))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
