import "reactn";

declare module "reactn/default" {
  interface Product {
    id: number
    price: number
    title: string
    description: string
    category: string
    image: string
  }

  export interface State {
    cart: Product[]
  }
}