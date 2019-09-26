import { SIDE_EFFECT } from 'src/store/reducer';

// On implémente un middleware. Son rôle est d'intercepter des actions
// dont le but premier n'est pas d'arriver jusqu'au reducer.
// Un middleware s'occupe avant tout des effets de bord. Il décide si
// certaines actions doivent être traitées autrement que par une
// mise-à-jour du state.
// Il est possible de déclencher à la fois un effet de bord & une màj.

const middleware = (store) => (next) => (action) => {
  console.log('middleware:', action);

  // La douane examine nos papiers d'identité.
  switch(action.type) {
    // La douane intercepte spécifiquement les actions de type
    // 'SIDE_EFFECT'. Ces actions ne doivent pas aller au reducer,
    // mais déclencher des effets de bord.
    case SIDE_EFFECT: {
      console.log('middleware/SIDE_EFFECT');
      // Ici, on peut faire du logging, lancer des requêtes AJAX, etc.
      break;
    }

    default: {
      console.log('middleware/default');
      next(action);
    }
  }
}

export default middleware;
