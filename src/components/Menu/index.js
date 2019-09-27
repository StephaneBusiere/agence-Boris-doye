import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import { getURL } from 'src/utils/url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './menu.sass';



const element = <FontAwesomeIcon icon={faBars} size="6x" color="black"/>

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      {element}
      </Button>
     
      <Menu 
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink
        exact
        to="/"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Home
      </NavLink></MenuItem>
        
      <MenuItem onClick={handleClose}><NavLink
        exact
        to={getURL('/work', name)}
        key={name}
        className="nav-link"
        activeClassName="nav-link--active"
      >
       Work
      </NavLink></MenuItem>
        
      <MenuItem onClick={handleClose}> <NavLink
        exact
        to={getURL('/team', name)}
        key={name}
        className="nav-link"
        activeClassName="nav-link--active"
      >
       Team
      </NavLink></MenuItem>

<MenuItem onClick={handleClose}> <NavLink
        exact
        to={getURL('/clients', name)}
        key={name}
        className="nav-link"
        activeClassName="nav-link--active"
      >
       Clients
      </NavLink></MenuItem>

      <MenuItem onClick={handleClose}> <NavLink
      exact
      to={getURL('/equipements', name)}
      key={name}
      className="nav-link"
      activeClassName="nav-link--active"
    >
     Equipement
    
     </NavLink></MenuItem>
    <MenuItem onClick={handleClose}> <NavLink
    exact
    to={getURL('/aventures', name)}
    key={name}
    className="nav-link"
    activeClassName="nav-link--active"
  >
   Aventures
  </NavLink></MenuItem>

  <MenuItem onClick={handleClose}> <NavLink
  exact
  to={getURL('/news', name)}
  key={name}
  className="nav-link"
  activeClassName="nav-link--active"
>
 News
</NavLink></MenuItem>

<MenuItem onClick={handleClose}> <NavLink
      exact
      to={getURL('/contact', name)}
      key={name}
      className="nav-link"
      activeClassName="nav-link--active"
    >
     Contact
    </NavLink></MenuItem>

      </Menu>
    </div>
  );
}