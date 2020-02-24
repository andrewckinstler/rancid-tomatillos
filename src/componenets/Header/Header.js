import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions'

const Header = (props) => {
  const logout = () => {
    props.logout();
  }
	return (
    <article className="header_main-container">
      {!props.user 
      ? null
      : <article className="header_welcome-text">
          <h1>Welcome, [user]!</h1>
          <h3> Avg. Rating: 5.5 </h3>
          <h3>Number of Ratings:</h3>
        </article>}
      <Link to={'/'} className="header_main-link">
        Rancid Tomatillos
      </Link>
      {
        !props.user 
        ? <Link to={'/login'} className="header_logoff-button">Login</Link>
        : <Link to={'/'} className="header_logoff-button"
        onClick={() => logout() }>Logout</Link>
      }
    </article>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch( logout() )
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
