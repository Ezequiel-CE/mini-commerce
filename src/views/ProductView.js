import React, { useEffect, useState } from "react";
import { getProductId } from "../app/services/productServices";
import { Col, Row, Container, Badge } from "react-bootstrap";

export const ProductView = ({ match }) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const { id } = match.params;
    getProductId(id)
      .then((productFromDb) => {
        setProductDetails(productFromDb);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match]);

  return (
    <Container className="justify-content-md-center">
      <Row>
        <Col>
          <h1>{productDetails && productDetails.title}</h1>
          <Badge bg="secondary">
            <h3>${productDetails && productDetails.price}</h3>
          </Badge>
        </Col>
      </Row>
      <Row className="justify-content-md-end">
        <Col md="auto">
          <h2>{productDetails && productDetails.category}</h2>
        </Col>
      </Row>
      <Row className="justify-content-md-start">
        <Col md="auto">
          <img
            src={productDetails && productDetails.image}
            alt="product"
            height="500px"
            width="auto"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>{productDetails && productDetails.description}</h3>
        </Col>
      </Row>
    </Container>
  );
};
