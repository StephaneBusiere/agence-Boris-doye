import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Nav from 'src/components/Nav';

const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default withRouter(NavContainer);