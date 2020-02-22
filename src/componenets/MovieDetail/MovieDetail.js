import React, { Component } from 'react';
import './MovieDetail.scss';
import { connect } from 'react-redux';
import { postRating } from '../../actions';

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0
    }
  }

  render() {
    let {title, id, average_rating, poster_path, backdrop_path, release_date, overview} = this.props.selectedMovie
    return (
      <section className='movie-detail'>
        <div className='movie-detail__info'>
          <h2 className='movie-detail__title'>{title}</h2>
          <p>{`Average Rating: ${average_rating}`}</p>
          <label for='user-rating'>User Rating:</label>
          <input type='range' min='1' max='10' id='user-rating' name='user-rating' />
          <p>{overview}</p>
        </div>
        <image className='movie-detail__image' url=''></image>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  ratings: state.ratings
})

const mapDispatchToProps = dispatch => ({
  postRating: (rating) => dispatch(postRating(rating))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
