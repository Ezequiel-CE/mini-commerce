import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { ShoppingCartItem } from "./ShoppingCartItem";

export const ShoppingCart = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown
            title="Carrito"
            id="basic-nav-dropdown"
            menuVariant="dark"
          >
            <ShoppingCartItem />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};
