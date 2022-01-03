import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../../app/db/db.js";

export const ShoppingCart = () => {
  const [productCart, setProductCar] = useState([]);

  useLiveQuery(async () => {
    const productDB = await db.cart.toArray();
    setProductCar(productDB);
  });

  const getTotalPrice = (productArr) => {
    return productArr.reduce((acc, item) => acc + item.price, 0);
  };

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
            {productCart?.map((product) => (
              <ShoppingCartItem key={product.id} item={product} />
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Item>
              Total : $ {getTotalPrice(productCart)}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};
