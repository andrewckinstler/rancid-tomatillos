import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import PropTypes from 'prop-types';

const Header = (props) => {
  let avgRating = props.ratings.reduce((acc, rating) => {
    return acc + rating.rating;
  }, 0) / props.ratings.length
	return (
    <article className="header_main-container">
      {!props.user 
      ? null
      : <article className="header_welcome-text">
          <h1>Welcome, {props.user.name}!</h1>
          <h3> Avg. Rating: {avgRating.toFixed(2)} </h3>
          <h3>Number of Ratings: {props.ratings.length}</h3>
        </article>}
      <Link to={'/'} className="header_main-link">
        Rancid Tomatillos
      </Link>
      {
        !props.user 
        ? <Link to={'/login'} className="header_log-button">Login</Link>
        : <Link to={'/'} className="header_log-button"
        onClick={() => props.logout() }>Logout</Link>
      }
    </article>
  )
}

const mapStateToProps = state => ({
  ratings: state.ratings,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch( logout() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
 
Header.propTypes = {
  props: PropTypes.any
}
