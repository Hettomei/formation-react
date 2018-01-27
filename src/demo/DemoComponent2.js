import React from 'react';

const DemoComponent2 = (props) => (
  <div>
    <p>Je suis DemoComponent2, partie haute</p>
    {props.children}
    <p>Je suis DemoComponent2, partie basse</p>
  </div>
)

export default DemoComponent2;
