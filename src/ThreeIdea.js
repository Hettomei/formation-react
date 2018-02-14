import React from 'react';
import {
  Image,
} from 'react-bootstrap';

import jsx from './img/jsx.png';
import flux from './img/flux-diagram-white-background.png';
import reconciliation from './img/reconciliation.gif';

const ThreeIdea = () => (
  <div>
    <h2>3 idées</h2>

    <h3>1) <a href='https://reactjs.org/docs/jsx-in-depth.html'>JSX</a></h3>
    <p>'It is just syntactic sugar' : on peut s'en passer.</p>
    <p><Image src={jsx} responsive /></p>

    <h3>2) One-way data flow</h3>
    <p>(<a href='https://github.com/facebook/flux'>flux implementation</a>, puis <a href='https://redux.js.org/'>redux</a>)</p>
    <p><Image src={flux} responsive /><a href='https://github.com/facebook/flux'>Credit: https://github.com/facebook/flux</a></p>

    <h3>3) Virtual DOM</h3>
    <p>où '<a href='https://reactjs.org/docs/reconciliation.html'>réconciliation</a>'</p>
    <p><Image src={reconciliation} responsive /><a href='https://reactjs.org/docs/rendering-elements.html'>Credit: https://reactjs.org/docs/rendering-elements.html</a></p>

  </div>
)

export default ThreeIdea;
