import React from 'react';
import { Button, Container, Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) =>{
  //debugger;  
  return (
    <Navbar color="dark" className="navbar-dark navbar-expand">
      <NavbarToggler right/>
      <NavbarBrand href="/">EBis 5</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav className="lg-auto" navbar>
          {
            props.links.length ? (
                props.links.map((lnk, i) => {
                  return(
                    <NavItem key={i}>
                      <Button onClick={() => {props.onClick(lnk.name)}}>{lnk.name}</Button>
                    </NavItem>)
                })              
            ) : null
          }
          <NavItem>
            <Button>Open Other Stuff</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

  )
}

export default NavBar;