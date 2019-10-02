import React from 'react';
import { connect } from 'react-redux';

import './team.sass';

const Team= ({response}) => {

    return <div className="team">
  
    <div>{response.steps}</div>
  </div>;
  
  
};
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state, ownProps) => {
    return {
      response: state.response
    
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
const TeamContainer = connectionStrategies(Team);

// Étape 3 : on exporte le composant connecté qui a été généré
//export default AppContainer;


export default TeamContainer;



