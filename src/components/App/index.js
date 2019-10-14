/**
 * Import
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
/**
 * Local import
 */
import { updateInputValue } from 'src/store/reducer';
import categories from 'src/data/categories';
import posts from 'src/data/posts';
// Composants enfants éventuels
import HeaderContainer from 'src/components/Header';
import NavBurgerContainer from 'src/components/NavBurger';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Work from 'src/components/Work';
import NavBurger from 'src/containers/NavBurger';
import Team from 'src/components/Team';
import Clients from 'src/components/Clients';
import Equipements from 'src/components/Equipements';
import Aventures from 'src/components/Aventures';
import NotFound from 'src/components/NotFound';
import News from 'src/components/News';
import Contact from 'src/components/Contact';
import LoginPage from 'src/components/LoginPage';
import AdminPage from 'src/components/AdminPage';
import LegalMentions from 'src/components/LegalMentions';
import PopupContainer from 'src/components/ConnexionPopup';

// Styles et assets
import './app.sass';

const App = ({burgerOn, popup}) => {
  let connexion;
  if (popup) {
    connexion = <PopupContainer />
  }

  let menuSlide;
  if (burgerOn) {
    menuSlide = <main className="app-main">
    {connexion}
    {/* Switch : une seule route à la fois peut matcher. */}
    <Switch>
      {/* Homepage */}
      <Route exact path="/" component={Home} />
      {/* Work */}
      <Route path="/work/" component={Work} />
      <Route path="/team/" component={Team} />
      <Route path="/aventures/" component={Aventures} />
      <Route path="/clients/" component={Clients} />
      <Route path="/equipements/" component={Equipements} />
      <Route path="/news/" component={News} />
      <Route path="/contact/" component={Contact} />
      <Route path="/loginPage/" component={LoginPage} />
      <Route path="/adminpage/" component={AdminPage} />
      <Route path="/mentionslegales/" component={LegalMentions} />
      {/* Fallback global (match sans condition si rien n'a matché avant) */}
       <Route component={NotFound} /> 
    </Switch>
  </main>
  } else {
    menuSlide = <div>
    <NavBurgerContainer />
    </div>
  }
 

  return (
  <div id="app">
  <HeaderContainer />
  {menuSlide}
  <Footer  /> 
    
    
    
  </div>
  );
};

App.propTypes = {
  /** Titre de l'application React */
  title: PropTypes.string
};

/**
 * Export
 */

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      burgerOn: state.burgerOn,
      popup: state.popup
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
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
const AppContainer = connectionStrategies(App);

// Étape 3 : on exporte le composant connecté qui a été généré
export default AppContainer;
