Le composant racine `App` a besoin d'un store Redux. Utiliser le composant [`Provider`](https://react-redux.js.org/7.0/api/provider#provider) de React-Redux pour le mettre à disposition :

```js
import { Provider } from 'react-redux';
import store from 'src/store';

<Provider store={store}>
  <App title="Exemple d'application React" />
</Provider>;
```
