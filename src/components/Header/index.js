import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/containers/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from 'src/assets/images/borisdoyelogo_mini_white.png'
import './header.sass';

const element = <FontAwesomeIcon className="burgerIcon" icon={faBars}    />


const Header = ({  }) => {
  
  

  return (
    <header className="header">
     <img className="logoWhite" src={logo} alt="Logo"/>
     <h1 className="AgencyName">Agence</h1>
     <h2 className="ownerName" >Boris Doye</h2>
     <image>{element}</image>
     <Nav  className="navMenu" />
    </header>
  );
};



export default Header;
