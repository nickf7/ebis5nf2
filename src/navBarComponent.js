import React from 'react';
import { Button, Container, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) =>{
  return (
    <Navbar color="dark" className="navbar-dark navbar-expand">
      <NavbarToggler right/>
      <NavbarBrand href="/">EBis 5</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav className="lg-auto" navbar>
          <NavItem>
            <Button color="primary">Open Work Order</Button>
          </NavItem>
          <NavItem>
            <Button>Open Other Stuff</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

  )
}

export default NavBar;