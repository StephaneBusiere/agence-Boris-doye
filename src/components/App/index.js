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
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';
// Styles et assets
import './app.sass';

const App = () => (
  
 
  <div id="app">
  <Header  />
  <Main  />
  <Footer  />
    
    
    
    
  </div>
);

App.propTypes = {
  /** Titre de l'application React */
  title: PropTypes.string.isRequired
};

/**
 * Export
 */

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      title: ownProps.title,
    
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      handleChange: (event) => {
        dispatch(updateInputValue(event.target.value));
      }
    };
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const AppContainer = connectionStrategies(App);

// Étape 3 : on exporte le composant connecté qui a été généré
export default AppContainer;
