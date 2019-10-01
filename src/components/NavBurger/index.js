import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


import { getURL } from 'src/utils/url';
import './navburger.sass';

const NavBurger = ({onClick2}) => (
    <nav className="navburger">
      
      {/* Home */}
      
      <NavLink
        onClick={onClick2}
        exact
        to="/"
        className="navburgerlink"
        activeClassName="nav-link--active"
      >
        Home
      </NavLink>
  
      {/* Work */}
   
        <NavLink
          onClick={onClick2}
          exact
          to={getURL('/work', name)}
          key={name}
          className="navburgerlink"
          activeClassName="nav-link--active"

        >
         Work
        </NavLink>
      
      {/* Team */}

        <NavLink
          onClick={onClick2}
          exact
          to={getURL('/team', name)}
          key={name}
          className="navburgerlink"
          activeClassName="nav-link--active"
          
        >
         Team
        </NavLink>

      {/* Clients */}

         <NavLink
         onClick={onClick2}
         exact
         to={getURL('/clients', name)}
         key={name}
         className="navburgerlink"
         activeClassName="nav-link--active"
         
       >
        Clients
       </NavLink>
        
      {/* equipements */}

        <NavLink
        onClick={onClick2}
        exact
        to={getURL('/equipements', name)}
        key={name}
        className="navburgerlink"
        activeClassName="nav-link--active"
        
        >
        Equipements
        </NavLink>

      {/* aventures */}

        <NavLink
        onClick={onClick2}
        exact
        to={getURL('/aventures', name)}
        key={name}
        className="navburgerlink"
        activeClassName="nav-link--active"
        
        >
        Aventures
        </NavLink>

      {/* News */}

         <NavLink
         onClick={onClick2}
         exact
         to={getURL('/news', name)}
         key={name}
         className="navburgerlink"
         activeClassName="nav-link--active"
      
         >
         News
         </NavLink>

      {/* Contact */}

         <NavLink
         onClick={onClick2}
         exact
         to={getURL('/contact', name)}
         key={name}
         className="navburgerlink"
         activeClassName="nav-link--active"
        
         >
         Contact
         </NavLink>

      

      
 


    </nav>
  );
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
  const NavBurgerContainer = connectionStrategies(NavBurger);
  
  // Étape 3 : on exporte le composant connecté qui a été généré
  //export default AppContainer;
  
  
  export default NavBurgerContainer;
  
  
  