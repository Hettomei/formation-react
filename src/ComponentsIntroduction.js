import React from 'react';
import Code from './shared/Code';
import { Panel } from 'react-bootstrap';

function Demo(props) {
  const foo = 'bar';

  return <div>
    <p>Je suis un component</p>

    <ul className='component-example'>
      <li>2+2*2 = {2+2*2}</li>
      <li>variable foo: '{foo}'</li>
    </ul>
  </div>
}

const ComponentsIntroduction = () => (
  <div>
    <h2>Les {'<<Components>>'}</h2>

    <p>Un 'component' est un élement affiché par react :</p>

    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Démo</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Demo />
      </Panel.Body>
    </Panel>

    <Code>
        {`
const foo = 'bar';

const element = <div>
  <p>Je suis un component</p>

  <ul className='component-example'>
    <li>2+2*2 = {2+2*2}</li>
    <li>variable foo: '{foo}'</li>
  </ul>
</div>
`}
    </Code>

    <p>div, p, ul, li, li sont tous des components, pour s'en convaincre, voici la transformation via babel :</p>

    <Code>
        {`
const foo = 'bar';

const element = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'Je suis un component'
  ),
  React.createElement(
    'ul',
    { className: 'component-example' },
    React.createElement(
      'li',
      null,
      '2+2*2 = ',
      2 + 2 * 2
    ),
    React.createElement(
      'li',
      null,
      'variable foo: \\'',
      foo,
      '\\''
      )
  )
);
`}
    </Code>
  </div>
)

export default ComponentsIntroduction;
