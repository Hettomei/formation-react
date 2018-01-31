import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import Chrono from './demo/Chrono';

class ComponentsAndState extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 }
    this.incCounter = this.incCounter.bind(this)
    this.incByOne = this.incCounter.bind(this, 1)
  }

  incCounter(n) {
    this.setState({
      counter: this.state.counter + n
    })

    // this.setState((prevState, props) => ({
    //   counter: prevState.counter + n
    // }));
  }

  render() {
    return <div>
      <p>State : {JSON.stringify(this.state, null, 2)}</p>
      <p>
        <button onClick={() => this.incCounter(-1)}>-</button>
        <button onClick={this.incByOne}>+</button>
      </p>
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Chrono</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Chrono />
        </Panel.Body>
      </Panel>
    </div>
  }
}

export default ComponentsAndState;
