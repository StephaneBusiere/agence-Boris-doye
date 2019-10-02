import React from 'react';
import { NavLink } from 'react-router-dom';


import { getURL } from 'src/utils/url';


import './navfooter.sass';

const NavFooter = ({onClick2}) => (
      <nav>
        
        {/* Home */}
        
        <NavLink
          onClick={onClick2}
          exact
          to={getURL('/mentionslegales', name)}
          className="mentions"
          activeClassName="nav-link--active"
        >
          Mentions légales
        </NavLink>
        </nav>
        );

        export default NavFooter;