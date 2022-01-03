import React from "react";
import { Container } from "react-bootstrap";
import { ListProducts } from "../components/Products/ListProducts";
import { AlertProduct } from "../components/Products/AlertProduct";

export const Home = () => (
  <Container>
    <div className="App">
      <AlertProduct />
      <ListProducts />
    </div>
  </Container>
);
