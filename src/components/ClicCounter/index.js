import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

/**
 * Exemple de composant à état (stateful component).
 */
export default class ClicCounter extends React.Component {
  static propTypes = {
    /** Label du bouton */
    label: PropTypes.string
  }

  static defaultProps = {
    label: 'Cliquez moi !'
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     counter: 0
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   // ...
  // }


  // On peut faire plus simple avec @babel/plugin-proposal-class-properties :

  /** État du compteur. */
  state = {
    counter: 0
  }  

  setCounter = (count) => {
    this.setState({
      counter: count
    });
  }

  /**
   * Incrémente le compteur.
   * 
   * @public
   */
  increment = (event) => {
    console.log(event);
    this.setCounter(this.state.counter + 1);
  }

  /**
   * Réinitialise le compteur à zéro.
   * 
   * @public
   */
  reset = (event) => {
    console.log(event);
    this.setCounter(0);
  }

  render() {
    console.log('rendering - state:', this.state);
    const { label } = this.props;
    const { counter } = this.state;
    return [
      <button css={styles} key='inc' onClick={this.increment}>{label} ({counter})</button>,
      <button css={styles} key='reset' onClick={this.reset}>RESET</button>
    ]
  }
}
