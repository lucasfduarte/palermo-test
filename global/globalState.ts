import { getGlobal, setGlobal } from "reactn"
import { State } from "reactn/default"
import { Product } from "../screens/home/product/interfaces"

export const initialGlobalState: State = {
  cart: [],
}

export const resetCartState = () => {
  const state = getGlobal()

  setGlobal({
    ...state,
    cart: initialGlobalState.cart,
  })
}

export const addItemToCart = (newItem: Product) => {
  const cartState = getGlobal().cart
  const newCartState = cartState.concat(newItem)
  
  setGlobal({
    cart: newCartState,
  })
}

export const removeItemFromCart = (itemIndex: number) => {
  const cartState = getGlobal().cart
  itemIndex > -1 && cartState.splice(itemIndex, 1)

  setGlobal({
    cart: cartState,
  })
}
