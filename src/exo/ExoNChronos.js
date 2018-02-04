import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Chrono from '../demo/Chrono';

class ExoNChronos extends Component {

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
      <h2>Exercice</h2>
      <p>Créer une infinité de chrono indépendant</p>
      <p>Dans cette boite de dialogue</p>
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Liste des chronos</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>
            <button onClick={this.addChrono}>Ajouter Chrono</button>
          </p>
          {this.state.chronos}
        </Panel.Body>
      </Panel>
    </div>
  }
}

export default ExoNChronos;
