import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Chrono from '../demo/Chrono';

class ExoSplitChronos extends Component {

  constructor(props) {
    super(props);
    this.state = { chronos: [] }
    this.addChrono = this.addChrono.bind(this)
  }

  addChrono() {
    this.setState({ chronos: this.state.chronos.concat(<Chrono key={this.state.chronos.length}/>) })
  }

  render() {
    return <div>
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Exercice</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Chaque chronos peut etre mis en pause et démarré sur un nouveau</p>
          <p>
            <button onClick={this.addChrono}>Ajouter Chrono</button>
          </p>
        </Panel.Body>
      </Panel>
      {this.state.chronos}
    </div>
  }
}

export default ExoSplitChronos;
