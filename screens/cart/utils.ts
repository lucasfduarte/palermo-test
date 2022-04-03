import { Product } from "../home/product/interfaces";

export const sumPrices = (cart: Product[]) => {
  return cart.reduce((acc, val) => acc + (val.price || 0), 0)
}
