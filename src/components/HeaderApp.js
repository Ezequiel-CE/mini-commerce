import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../logo.svg";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart.js";

const style = {
  marginBottom: "30px",
};

export const HeaderApp = () => {
  return (
    <Navbar bg="dark" variant="dark" style={style}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Mini Ecommerce
        </Navbar.Brand>
        <ShoppingCart />
      </Container>
    </Navbar>
  );
};
