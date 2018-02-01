import React from 'react';
import { Link } from 'react-router-dom'

function getClass(path) {
  return window.location.pathname === path ? 'active' : null
}

const MenuLinks = (props) => (
  <ul>
    { props.links.map(({path, desc, children}) => [
      <li key={path} className={getClass(path)}><Link to={path}>{desc}</Link></li>,
      children && <MenuLinks key={`${path}.children`} links={children} />,
    ]
    )}
  </ul>
)

export default MenuLinks;
