import React from 'react';
import { Panel } from 'react-bootstrap';

const DemoComponent = () => (
  <Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">1er composant</Panel.Title>
    </Panel.Heading>
    <Panel.Body>Simple composant</Panel.Body>
  </Panel>
)

export default DemoComponent;
