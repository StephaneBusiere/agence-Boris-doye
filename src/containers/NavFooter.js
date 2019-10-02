import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavFooter from 'src/components/Navfooter';


const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

const NavFooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavFooter);


export default withRouter(NavFooterContainer);