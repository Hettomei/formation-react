import React from 'react';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
} from 'react-bootstrap';

function Header(props) {
  return <Navbar inverse fluid>

    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Formation React</Link>
      </Navbar.Brand>
    </Navbar.Header>

    <Nav>
      <LinkContainer to="/readme">
        <NavItem>A-propos</NavItem>
      </LinkContainer>

      <NavItem href='https://github.com/Hettomei/react-budget'>Sources</NavItem>

      <NavDropdown title="React" id="basic-nav-dropdown">
        <NavItem href='https://reactjs.org/'>reactjs.org</NavItem>
        <NavItem href='https://github.com/facebook/create-react-app'>Create React apps</NavItem>
        <NavItem href='https://github.com/facebook/flux'>flux implementation</NavItem>
      </NavDropdown>

      <NavDropdown title="Redux" id="basic-nav-dropdown">
        <NavItem href='https://redux.js.org/'>redux.js.org</NavItem>
      </NavDropdown>

      <NavDropdown title="React-router" id="basic-nav-dropdown">
        <NavItem href='https://reacttraining.com/react-router/'>react-router</NavItem>
      </NavDropdown>

      <NavDropdown title="React-Bootstrap" id="basic-nav-dropdown">
        <NavItem href='https://react-bootstrap.github.io/'>React-Bootstrap</NavItem>
      </NavDropdown>

    </Nav>
  </Navbar>
}

export default Header;
