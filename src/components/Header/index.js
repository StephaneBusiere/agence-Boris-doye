import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/containers/Nav';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faBars, faWindowClose, faUserCircle);

import { connect } from 'react-redux';

import logo from 'src/assets/images/borisdoyelogo_mini_white.png';

import './header.sass';

const BurgerElement = <FontAwesomeIcon  className="burgerIcon" icon={faBars}/>
const windowCloseElement = <FontAwesomeIcon className="burgerCross" icon={faWindowClose} />

// Header component
const Header = ({ onClick,onClick2,burgerOn }) => {
  
  // conditionnal header menu
  let menu;
  if (burgerOn) {
    menu = <image onClick={onClick} >{BurgerElement}</image>
  } else {
    menu = <image onClick={onClick2} >{windowCloseElement}</image>
  }

  return (
    
    <header className="header">

      <NavLink
        exact
        to="/"
        
        activeClassName="nav-link--active"
      >
        <img className="logoWhite" src={logo} alt="Logo"/>
      </NavLink>
     
      <Nav  className="navMenu">
        {menu}
      </Nav>

     <div className="fa-user-circle userAccount">
     <FontAwesomeIcon icon="user-circle" className="userIcon" />
     </div>
     
    </header>
  );
};

const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      burgerOn: state.burgerOn
    
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {

    onClick2:(event) => {
      console.log('yea')
      const action = {
        type: 'BURGER_OFF'
      };
      dispatch(action);
    },
      onClick: (event) => {
        console.log('ok')
        const action = {
          type: 'BURGER_ON'
        };
        dispatch(action);
      }
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const HeaderContainer = connectionStrategies(Header);

// Étape 3 : on exporte le composant connecté qui a été généré
//export default AppContainer;


export default HeaderContainer;
