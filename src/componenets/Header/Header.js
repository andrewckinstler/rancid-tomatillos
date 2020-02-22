import React from 'react';
import './Header.scss';

const Header = () => {
	return(
 <article className="header_main-container">
   <article className="header_welcome-text">
     <h1>Welcome, [user]!</h1>
     <h3> Avg. Rating: 5.5 </h3>
     <h3>Number of Ratings:</h3>
   </article>
   <h1 className="header_main-h1">
     Rancid Tomatillos
   </h1>
   <button className="header_logoff-button">Log Off</button>
 </article>
 )
}

export default Header;
