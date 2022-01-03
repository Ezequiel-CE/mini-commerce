import React, { useEffect, useState } from "react";
import { getProductId } from "../app/services/productServices";

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
    <div>
      <h1>{productDetails && JSON.stringify(productDetails)}</h1>
    </div>
  );
};
