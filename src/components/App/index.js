/**
 * Import
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import { updateInputValue } from 'src/store/reducer';

// Composants enfants éventuels
import ClicCounter from 'src/components/ClicCounter';

// Styles et assets
import './app.sass';

const App = ({ title, greeting, handleChange }) => (
  <div id="app">
    <h1 id="app-title">{title}</h1>
    <input
      type="text"
      id="app-content"
      value={greeting}
      onChange={handleChange}
    />
    <br/>
    <ClicCounter label="Clic-me!" />
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
      greeting: state.greetingMessage
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
