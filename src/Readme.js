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

    <h3>Retrouver le code de la page affichée</h3>
    <p>Pour chaque lien, un composant est créé. Il est possible de retrouver le composant facilement gràce au <a href='https://github.com/facebook/react-devtools#faq'>React Developer Tools</a>.</p>
    <p>Autre possibilité, lire le path de l'url, rechercher l'equivalent dans <code>src/linksRoutesComponents.js</code>. Le component affiché est la valeur de la propriété <code>component</code>.</p>
    <Code>
      {`
{
  path: '/readme',
  component: Readme,
  desc: 'Le support de formation',
},
`}
  </Code>

  <h3>Modifier le projet 'live'</h3>
  <p>A chaque modification, le serveur recharge la page. Instant feedback</p>
  <p>Le projet est versionné sous git, vous pouvez expérimenter autant que nécessaire</p>
  <p>Exemple de workflow</p>
    <Code>
      {`
cd react-budget
git checkout -b test-exercice-chronos
# hack hack hack
git commit

# Retour sur le projet de base
git checkout master
`}
  </Code>

</div>
)

export default Readme;
