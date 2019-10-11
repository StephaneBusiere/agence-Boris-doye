import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import { getURL } from 'src/utils/url';
import './nav.sass';

const Nav = () => (
    <nav className="navMenu">
      
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
      
      {/* Team */}

        <NavLink
          exact
          to={getURL('/team', name)}
          key={name}
          className="nav-link"
          activeClassName="nav-link--active"
        >
         Team
        </NavLink>
 {/* aventures */}

 <NavLink
 exact
 to={getURL('/aventures', name)}
 key={name}
 className="nav-link"
 activeClassName="nav-link--active"
 >
 Aventures
 </NavLink>
 
 {/* equipements */}

 <NavLink
 exact
 to={getURL('/equipements', name)}
 key={name}
 className="nav-link"
 activeClassName="nav-link--active"
 >
 Equipements
 </NavLink>

{/* News */}

  <NavLink
  exact
  to={getURL('/news', name)}
  key={name}
  className="nav-link"
  activeClassName="nav-link--active"
  >
  News
  </NavLink>
      {/* Clients */}

         <NavLink
         exact
         to={getURL('/clients', name)}
         key={name}
         className="nav-link"
         activeClassName="nav-link--active"
       >
        Clients
       </NavLink>
        
     

     

      {/* Contact */}

         <NavLink
         exact
         to={getURL('/contact', name)}
         key={name}
         className="nav-link"
         activeClassName="nav-link--active"
         >
         Contact
         </NavLink>

      

      
 


    </nav>
  );
  
  Nav.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object.isRequired),
  };
  
  export default Nav;
  