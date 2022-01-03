import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { DetailCart } from "../components/ShoppingCart/DetailCart";

export const PurchaseView = ({ history }) => {
  const handleCancelButton = () => {
    history.push("/");
  };

  return (
    <div>
      <h1>Pagina del carrito</h1>
      <DetailCart />
      <Row>
        <Col xs={6}>
          <Button variant="danger" onClick={handleCancelButton}>
            {" "}
            Cancelar
          </Button>
        </Col>
        <Col xs={6}>
          <Button variant="success"> Comprar</Button>
        </Col>
      </Row>
    </div>
  );
};
