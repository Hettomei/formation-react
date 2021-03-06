import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';

import linksRoutesComponents from './linksRoutesComponents';

import Header from './Header';
import Home from './Home';
import MenuLinks from './MenuLinks';
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
                <MenuLinks links={linksRoutesComponents.tree} />
              </Col>

              <Col xs={9} className='demo-col'>
                <Switch>
                  <Route path='/' exact component={Home} />
                  { linksRoutesComponents.flatten.map(({path, component}) => <Route key={path} exact path={path} component={component} />) }
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
