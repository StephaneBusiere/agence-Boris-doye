const path = require('path');

module.exports = {
  title: 'Doc React-Modele',
  ribbon: {
    url: 'https://github.com/O-clock-Titan/React-modele',
    text: 'Repo GitHub'
  },
  pagePerSection: true,
  // https://react-styleguidist.js.org/docs/configuration.html#ignore
  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/styles.js'
  ]
};
