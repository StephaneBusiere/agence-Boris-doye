import React from 'react';
import PropTypes from 'prop-types';
import logo from 'src/assets/images/borisdoyelogo_mini_white.png'
import './header.sass';

const Header = ({  }) => {
  
  

  return (
    <header className="header">
     <img className="logoWhite" src={logo} alt="Logo"/>
     <h1 className="AgencyName">Agence</h1>
     <h2 className="ownerName" >Boris Doye</h2>
     
    </header>
  );
};



export default Header;
