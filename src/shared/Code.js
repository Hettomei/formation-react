import React from 'react';

/**
* Format Code
* @example
* <Code>
*   {`
* npm start
* # browser automatically open
*   `}
* </Code>
* @returns {React Component} Return the string, formatted
*/
const Code = (props) => (
  <pre className='code'>{props.children.replace(/^\n/, '')}</pre>
)

export default Code;
