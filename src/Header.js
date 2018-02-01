import React from 'react';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
} from 'react-bootstrap';
import linksRoutesComponents from './linksRoutesComponents';

function Header(props) {
  return <Navbar inverse fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={linksRoutesComponents[0].path}>Formation React</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/contact">
        <NavItem>Contact</NavItem>
      </LinkContainer>
      <NavItem href='https://github.com/Hettomei/react-budget'>Sources</NavItem>
      <NavDropdown title="Documentation React" id="basic-nav-dropdown">
        <NavItem href='https://reactjs.org/'>reactjs.org</NavItem>
        <NavItem href='https://github.com/facebook/create-react-app'>Create React apps</NavItem>
      </NavDropdown>
    </Nav>
  </Navbar>
}

export default Header;
