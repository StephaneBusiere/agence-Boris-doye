import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/containers/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

import logo from 'src/assets/images/borisdoyelogo_mini_white.png'

import './header.sass';

const BurgerElement = <FontAwesomeIcon className="burgerIcon" icon={faBars}/>
const windowCloseElement = <FontAwesomeIcon className="burgerIcon" icon={faWindowClose} />


const Header = ({ onClick,onClick2,burgerOn }) => {
  
  let menu;
  if (burgerOn) {
    menu = <image onClick={onClick} >{BurgerElement}</image>
  } else {
    menu = <image onClick={onClick2} >{windowCloseElement}</image>
  }

  return (
    
    <header className="header">
     <img className="logoWhite" src={logo} alt="Logo"/>
     
  <Nav  className="navMenu" />
     {menu}
     
     
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
