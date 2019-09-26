// La librairie redux s'occupe de nous fournir un système de
// gestion d'état (state management). Il n'est pas question ici
// de React !
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/store/reducer';
import middleware from 'src/store/middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// On crée LE store de CETTE application. Un castor sympa :)
const kastore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(middleware))
);

export default kastore;
