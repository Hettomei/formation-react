import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';

import linksRoutesComponents from './linksRoutesComponents';

import Header from './Header';
import Page404 from './Page404';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Grid fluid>
            <Row className="show-grid">
              <Col xs={3} className='menu'>
                <ul>
                  { linksRoutesComponents.map(({path, desc}) => <li key={path}><Link to={path}>{desc}</Link></li>) }
                </ul>
              </Col>

              <Col xs={9}>
                <Switch>
                  { linksRoutesComponents.map(({path, exact, component}) => <Route key={path} exact={exact} path={path} component={component} />) }
                  <Route component={Page404}/>
                </Switch>
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
