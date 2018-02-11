import React from 'react';
import { Panel } from 'react-bootstrap';

const DemoComponent2 = (props) => (
  <Panel bsStyle="success">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Démo</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      Composant avec children :
      {props.children}
      {props.children}
      {props.children}
    </Panel.Body>
  </Panel>
)

export default DemoComponent2;
