import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { PATHS } from './constants';

function Header(props) {
  return <Navbar inverse fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={PATHS.root}>Formation React</Link>
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
