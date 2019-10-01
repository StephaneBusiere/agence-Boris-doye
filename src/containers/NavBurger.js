import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavBurger from 'src/components/NavBurger';

const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

const NavBurgerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBurger);

export default withRouter(NavBurgerContainer);