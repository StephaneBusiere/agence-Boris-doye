import React from 'react';
import PropTypes from 'prop-types';
import logo from 'src/assets/images/borisdoyelogo_mini_white.png'
import './styles.sass';

const Header = ({  }) => {
  
  

  return (
    <header className="header">
     <img className="logoWhite" src={logo} alt="Logo"/>
     <h1>Agence</h1>
     <h2>Boris Doye</h2>
    </header>
  );
};



export default Header;
