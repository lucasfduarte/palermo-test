import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { useGlobal } from "reactn";
import { Container } from "../styled";
import { EmptyCard } from "./EmptyCart";
import { CartTitle, EmptyCartWrapper } from "./styled";
import { CartList } from "./CartList/CartList";
import { CartListFooter } from "./CartList/CartListFooter";
import { sumPrices } from "./utils";
import { View } from "react-native";

interface iProps {
  navigation: NativeStackNavigationProp<any>
}

const CartScreen = ({ navigation }: iProps) => {
  const [cart] = useGlobal('cart')

  const goBack = () => navigation.goBack()
  const goToConfirmationScreen = () => navigation.navigate('Success')

  const getCartMainElement = () => {
    if (cart.length) {
      return (
        <CartList cart={cart} />
      )
    } else {
      return (
        <EmptyCartWrapper>
          <EmptyCard handleAction={goBack} />
        </EmptyCartWrapper>
      )
    }
  }

  return (
    <>
      <Container>
        <CartTitle>Meu Carrinho</CartTitle>

        {getCartMainElement()}
      </Container>
      {cart && cart.length ? 
        <CartListFooter 
          onPressButton={goToConfirmationScreen} 
          priceSum={sumPrices(cart)} 
        /> : 
        <View />
      }
    </>
  )
}

export default CartScreen
