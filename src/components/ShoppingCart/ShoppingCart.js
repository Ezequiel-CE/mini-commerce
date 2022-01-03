import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { useLiveQuery } from "dexie-react-hooks";
import { Link } from "react-router-dom";

import db from "../../app/db/db.js";

export const ShoppingCart = () => {
  const [productCart, setProductCar] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useLiveQuery(async () => {
    const productDB = await db.cart.toArray();
    setProductCar(productDB);
  });

  useEffect(() => {
    //lo paso aca para que no salga la warning
    const getTotalPrice = () => {
      const total = productCart?.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(total.toFixed(2));
    };
    if (productCart.length > 0) {
      getTotalPrice();
    }
  }, [productCart]);

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
              <Link to={"/purchase"}>Total : $ {totalPrice}</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};
