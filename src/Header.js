import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import linksRoutesComponents from './linksRoutesComponents';

function Header(props) {
  return <Navbar inverse fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={linksRoutesComponents[0].path}>Formation React</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href='https://github.com/Hettomei/react-budget'>
        sources
      </NavItem>
    </Nav>
  </Navbar>
}

export default Header;
