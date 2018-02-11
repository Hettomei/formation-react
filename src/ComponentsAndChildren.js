import React from 'react';
import DemoComponent2 from './demo/DemoComponent2';
import DemoComponent3 from './demo/DemoComponent3';

const ComponentsAndChildren = () => (
  <div>
    <h2>Components</h2>
    <h5>Une simple balise html</h5>

    <DemoComponent2>
      <DemoComponent3 includedIn='DemoComponent2'/>
    </DemoComponent2>
  </div>
)

export default ComponentsAndChildren;
