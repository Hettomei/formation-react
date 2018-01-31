import React from 'react';
import { Panel } from 'react-bootstrap';

const DemoComponent3 = (props) => (
  <Panel bsStyle="warning">
    <Panel.Heading>
      <Panel.Title componentClass="h3">3eme composant</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      Je suis DemoComponent3,
      inclus dans {props.includedIn} en tant que 'children'
    </Panel.Body>
  </Panel>
)

export default DemoComponent3;
