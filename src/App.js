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
import Contact from './Contact';
import Page404 from './Page404';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Grid fluid>
            <Row >
              <Col xs={3} className='menu'>
                <ul>
                  { linksRoutesComponents.map(({path, desc}) => <li key={path}><Link to={path}>{desc}</Link></li>) }
                </ul>
              </Col>

              <Col xs={9} className='demo-col'>
                <Switch>
                  { linksRoutesComponents.map(({path, exact, component}) => <Route key={path} exact={exact} path={path} component={component} />) }
                  <Route path='/contact' component={Contact} />
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
