import React, { useState } from 'react';
import AmericanLogo from '../assets/header/americansign-logo.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="mt-2 mb-2 col-lg-8" href="/"><AmericanLogo border="0" width="200" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar class="">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Acerca</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Servicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contacto</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;