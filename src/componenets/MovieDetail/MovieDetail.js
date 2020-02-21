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
    return (
      <section className='movie-detail'>
        <div className='movie-detail__info'>
          <h2 className='movie-detail__title'>Movie Title</h2>
          <p>Average Rating: 5</p>
          <label for='user-rating'>User Rating:</label>
          <input type='range' min='1' max='10' id='user-rating' name='user-rating' />
          <p>Overview: Sint farm-to-table reprehenderit semiotics hammock sriracha laboris consectetur deep v cloud bread tousled messenger bag consequat. XOXO brunch mlkshk live-edge. Viral celiac raclette, locavore chambray iPhone hoodie migas. Messenger bag selfies magna coloring book aliquip, everyday carry velit.</p>
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