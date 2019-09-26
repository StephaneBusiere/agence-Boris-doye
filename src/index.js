/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
/**
 * Local import
 */
import AppContainer from 'src/components/App';
import kastore from 'src/store';
import { sideEffect } from 'src/store/reducer';

/**
 * Code
 */

const reactRootElement = <Provider store={kastore}>
<Router><AppContainer  /></Router>
</Provider>;

const renderingArea = document.querySelector('#root');
render(reactRootElement, renderingArea);

// Exemple d'action interceptée par un middleware.
kastore.dispatch(sideEffect());
