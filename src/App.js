import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { PATHS } from './constants';

import Home from './Home';
import FirstStepUsers from './FirstStepUsers';
import Page404 from './Page404';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={PATHS.root} component={Home}/>
          <Route path={PATHS.firstStep} component={FirstStepUsers}/>
          <Route component={Page404}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
