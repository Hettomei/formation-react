import React from 'react';
import {
  Image,
} from 'react-bootstrap';

import flux from './img/flux-diagram-white-background.png';
import jsx from './img/jsx.png';

const ThreeIdea = () => (
  <div>
    <h2>3 idées</h2>
    <ul>
      <li>One-way data flow (<a href='https://github.com/facebook/flux'>flux implementation</a>, then <a href='https://redux.js.org/'>redux</a>)</li>
      <li>Virtual DOM / <a href='https://reactjs.org/docs/reconciliation.html'>reconcilliation</a></li>
      <li><a href='https://reactjs.org/docs/jsx-in-depth.html'>JSX</a> 'it is just syntactic sugar' : on peut s'en passer.</li>
    </ul>
    <p><Image src={flux} responsive /><a href='https://github.com/facebook/flux'>Credit: https://github.com/facebook/flux</a></p>
    <p><Image src={jsx} responsive /><a href='https://reactjs.org/docs/jsx-in-depth.html'>Jsx in depth</a></p>
  </div>
)

export default ThreeIdea;
