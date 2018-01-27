import React from 'react';
import DemoComponent from './demo/DemoComponent';
import DemoComponent2 from './demo/DemoComponent2';
import DemoComponent3 from './demo/DemoComponent3';

const ComponentsAndProps = () => (
  <div>
    <h2>Simple balise html</h2>

    <DemoComponent />

    <DemoComponent2>
      <DemoComponent3 />
    </DemoComponent2>
  </div>
)

export default ComponentsAndProps;
