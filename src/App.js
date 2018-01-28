import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';

import { PATHS } from './constants';

import Home from './Home';
import ComponentsAndProps from './ComponentsAndProps';
import CreateUsersProps from './CreateUsersProps';
import Page404 from './Page404';

class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Row className="show-grid">
            <Col xs={3} className='menu'>
              <ul>
                <li><Link to={PATHS.root}>Home</Link></li>
                <li><Link to={PATHS.componentsAndProps}>Des components et des props</Link></li>
                <li><Link to={PATHS.createUserProps}>Créer des users</Link></li>
              </ul>
            </Col>

            <Col xs={9}>
              <Switch>
                <Route exact path={PATHS.root} component={Home}/>
                <Route path={PATHS.componentsAndProps} component={ComponentsAndProps}/>
                <Route path={PATHS.createUserProps} component={CreateUsersProps}/>
                <Route component={Page404}/>
              </Switch>
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
