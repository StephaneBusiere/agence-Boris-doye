import { connect } from 'react-redux';

/**
 * Local import
 */
import Work from 'src/components/Recipe';

import { getSlug } from 'src/utils/url';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  const singleRecipe = state.recipes.find(recipe => getSlug('work') === slug);

  return {
    recipe: singleRecipe,
  };
};

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = {};

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);

/**
 * Export
 */
export default RecipeContainer;
