import db from "../db/db";

export const getProductId = async (id) => {
  const productsFromDb = await db.cart.get(Number(id));
  return productsFromDb;
};
