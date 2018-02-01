import React from 'react';
import { Link } from 'react-router-dom'

const MenuLinks = (props) => (
  <ul>
    { props.links.map(({path, desc, children}) => [
      <li key={path}><Link to={path}>{desc}</Link></li>,
      children && <MenuLinks key={`${path}.children`} links={children} />,
    ]
    )}
  </ul>
)

export default MenuLinks;
