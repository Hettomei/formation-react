import React from 'react';
import Code from './shared/Code';

// just to avoid bot that read github source
const email = [
  'pro',
  '.',
  'otech',
  'consert',
  '@',
  'ier',
  'gauth',
  '.',
  'othee',
  'tim',
].reverse().join('');

const Readme = () => (
  <div>
    <h2>Formation React</h2>
    <p>Pour toutes questions : {email}</p>
    <h3>Le projet :</h3>
    <p>Projet initialisé via <a href="https://github.com/facebookincubator/create-react-app">Create React App.</a></p>
    <p>Accéder à la version la plus récente du <a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md">guide.</a></p>

    <h3>Démarrer le projet</h3>
    <Code>
      {`
npm start
# browser automatically open
`}
    </Code>
  </div>
)

export default Readme;
