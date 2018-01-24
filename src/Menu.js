import React from 'react';
import {
  Link,
} from 'react-router-dom'

import { PATHS } from './constants';

const Menu = () => (
  <div>
    <ul>
      <li><Link to={PATHS.root}>Home</Link></li>
      <li><Link to={PATHS.firstStep}>Créer des users</Link></li>
    </ul>
    <hr/>
  </div>
)

export default Menu;
