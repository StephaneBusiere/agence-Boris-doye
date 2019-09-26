Projet de base React
====================

Bienvenue dans ce modèle/template de projet React ! Il va vous servir de base de travail pour démarrer un nouveau projet, ou travailler sur un challenge récupéré depuis classroom.

Première utilisation
--------------------

Récupérez une copie du modèle :

```sh
git clone git@github.com:O-clock-{VotrePromo}/React-modele.git

cd React-modele

yarn # installe les dépendances du projet

yarn start # lance le serveur de developpement
# rdv sur http://localhost:3000/
```

Voilà, le modèle tourne, mais en fait ça ne sert pas à grand chose. L'idée est de se _baser sur_ le modèle, mais de le faire tourner dans un autre projet.

Comment utiliser le modèle dans un autre projet ?
-------------------------------------------------

On peut se baser sur React-modele pour démarrer un *nouveau* projet, ou même pour travailler sur un projet/challenge ayant déjà une base de code existante. Dans les deux cas, il faut copier/coller les parties intéressantes du modèle React dans le dossier du projet/challenge, en prenant guarde de ne pas écraser d'éventuels fichiers spécifiques déjà en place.

Pour ce faire, on vous conseille d'utiliser la procédure suivante :

``` sh
# Exemple : un projet ou un challenge se trouve dans mon-projet/

# on se place dans le dossier du projet dans lequel intégrer le modèle React
cd mon-projet

# on copie les fichiers (non-cachés) présents à la racine du modèle React
# note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -n ../React-modele/* .

# on copie les fichiers (cachés) présents à la racine du modèle React
# note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -n ../React-modele/.* . 

# on fait une copie (récursive) du dossier src/ du modèle React
cp -nr ../React-modele/src .  

# c'est presque prêt ! installation des dépendances décrites dans package.json
yarn

# lancement du projet avec le modèle React intégrér (webpack-dev-server)
yarn start
```

Build du projet
---------------

Par défaut, `yarn start` lance le projet « réactifié » en mode développment : c'est pratique, mais on ne voit jamais le résultat concret du travail de Webpack, car tout est géré en mémoire et rien n'est généré dans le dossier dist/.

On peut demander à Webpack de générer une version de prod du projet (dans le dossier dist/) :

- `build:dev` pour faire un build de prod mais sans traitements particuliers ;
- `build:prod` pour faire un build de prod avec minification et optimisation des fichiers en plus (version 100% prête pour hébergement).

```sh
# dans le dossier du projet
cd mon-projet

# build de développement : les fichiers sont rassemblés
yarn build:dev

# build de production : les fichiers sont rassemblés *et optimisés*
yarn build:prod
```

---

**Ce modèle React est déjà prêt à l'emploi : les commandes ci-dessous sont simplement indiquées pour mémoire / pour expliquer la construction du modèle => ne pas les lancer !**

---

Dépendances de développement
----------------------------

### [Webpack](https://webpack.js.org/)

*Task Runner* ou *Builder* ie. automatisation de tâches : transpilation JS par Babel, conversion Sass -> CSS, optimisation du build, etc.

``` sh
# Webpack
yarn add --dev webpack webpack-cli
# serveur de developpement
yarn add --dev webpack-dev-server
# Plugins
yarn add --dev html-webpack-plugin
yarn add --dev mini-css-extract-plugin
yarn add --dev optimize-css-assets-webpack-plugin
yarn add --dev uglifyjs-webpack-plugin
```

Fichier de configuration :

- webpack.config.js

### [Babel](https://babeljs.io/)

Transpilation ES6/JSX -> ES5.

``` sh
# Babel
yarn add --dev babel-core
# Babel pour webpack
yarn add --dev babel-loader
# vocabulaire ES6 -> ES5 de base
yarn add --dev babel-preset-env
# vocabulaire React
yarn add --dev babel-preset-react
# Plugin : propriétés de classes
yarn add --dev babel-plugin-transform-class-properties
# Plugin : rest et spread operator pour les objets
yarn add --dev babel-plugin-transform-object-rest-spread
```

Fichier de configuration :

- .babelrc

### [ESLint](https://eslint.org/)

``` sh
# ESLint
yarn add --dev eslint
# Config ESLint
yarn add --dev eslint-config-airbnb babel-eslint
# ESLint résolution des imports
yarn add --dev eslint-import-resolver-webpack
yarn add --dev eslint-plugin-import 
# ESLint pour React
yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-react
```

Fichiers de configuration :

- .eslintrc
- .eslintignore

### CSS ([Sass](https://sass-lang.com/), [PostCSS](https://postcss.org/), [autoprefixer](https://github.com/postcss/autoprefixer))

``` sh
# Traitement des styles et assets
yarn add --dev style-loader css-loader file-loader
# PostCSS et autoprefixer
yarn add --dev postcss autoprefixer postcss-loader
# SASS
yarn add --dev node-sass sass-loader
```

Fichiers de configuration :

- .postcssrc
- .browserslistrc

Dépendances de projet
---------------------

### Utilitaires

``` sh
# https://babeljs.io/docs/en/babel-polyfill/
yarn add babel-polyfill
```

### [React](https://reactjs.org/)

```sh
yarn add react react-dom prop-types
```

Outils pratiques
----------------

### Extension React Dev Tools
  
- [pour Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

Tests
-----

Lancement des tests avec `yarn test` :

```
NODE_PATH=./ mocha --require babel-core/register --require tests/.setup.js tests/**/*.test.js
```

### [Mocha](https://mochajs.org/)

Framework de test proposant des syntaxes pour structurer des série de tests : 

- describe()
- it()
- skip()

```sh
yarn add --dev mocha
```

### [Chai](http://www.chaijs.com/)

Librairie d'assertions proposant différentes syntaxes :

- assert
- should
- expect

```sh
yarn add --dev chai
```

### [Enzyme](https://github.com/airbnb/enzyme)

Librairie de test pour les composants React offrant, avec l'appui de [jsdom](https://github.com/jsdom/jsdom), de monter des composants React dans un DOM virtuel :

- shallow
- mount
- render

```sh
yarn add --dev enzyme
yarn add --dev enzyme-adapter-react-16
yarn add --dev jsdom
yarn add --dev ignore-styles
```
