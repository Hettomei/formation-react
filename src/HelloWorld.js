import React from 'react';
import Code from './shared/Code';

const HelloWorld = () => (
  <div>
    <h2>Hello World</h2>

    <p><code>index.html</code></p>
    <Code>
      {`
<body>
  <div id="root"></div>
</body>
`}
    </Code>

    <p><code>index.js</code></p>
    <Code>
      {`
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
`}
    </Code>

    <p>Voir <code>src/index.js</code> pour le support de formation.</p>
  </div>
)

export default HelloWorld;
