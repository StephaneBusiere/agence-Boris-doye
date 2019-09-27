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
import Home from 'src/components/Home';
import Work from 'src/components/Work';
import Nav from 'src/containers/Nav';
import Team from 'src/components/Team';
import Clients from 'src/components/Clients';
import Equipements from 'src/components/Equipements';
import Aventures from 'src/components/Aventures';
import NotFound from 'src/components/NotFound';
import News from 'src/components/News';
import Contact from 'src/components/Contact';
import AdminLogin from 'src/components/AdminLogin';
import AdminPage from 'src/components/AdminPage';

// Styles et assets
import './app.sass';

const App = () => (
  
 
  <div id="app">
  <Header  />
  <div className="app-nav">
      <Nav />
    </div>
    <main className="app-main">
      {/* Switch : une seule route à la fois peut matcher. */}
      <Switch>
        {/* Homepage */}
        <Route exact path="/" component={Home} />
        {/* Work */}
        <Route path="/work/" component={Work} />
        <Route path="/team/" component={Team} />
        <Route path="/clients/" component={Clients} />
        <Route path="/equipements/" component={Equipements} />
        <Route path="/aventures/" component={Aventures} />
        <Route path="/news/" component={News} />
        <Route path="/contact/" component={Contact} />
        <Route path="/adminlogin/" component={AdminLogin} />
        <Route path="/adminpage/" component={AdminPage} />
        {/* Fallback global (match sans condition si rien n'a matché avant) */}
         <Route component={NotFound} /> 
      </Switch>
    </main>
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
