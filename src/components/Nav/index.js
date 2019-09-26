import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import { getURL } from 'src/utils/url';
import './nav.sass';

const Nav = () => (
    <nav className="nav">
      {/* Home */}
      <NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Home
      </NavLink>
  
      {/* Work */}
   
        <NavLink
          exact
          to={getURL('/work', name)}
          key={name}
          className="nav-link"
          activeClassName="nav-link--active"
        >
         Work
        </NavLink>
      
    </nav>
  );
  
  Nav.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };
  
  export default Nav;
  