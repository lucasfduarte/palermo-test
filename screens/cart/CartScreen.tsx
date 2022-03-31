import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Container } from "../styled";
import { EmptyCard } from "./EmptyCart";
import { CartTitle, EmptyCartWrapper } from "./styled";

interface iProps {
  navigation: NativeStackNavigationProp<any>
}

const CartScreen = ({ navigation }: iProps) => {
  const goBack = () => navigation.goBack()

  return (
    <Container>
      <CartTitle>Meu Carrinho</CartTitle>

      <EmptyCartWrapper>
        <EmptyCard handleAction={goBack} />
      </EmptyCartWrapper>
    </Container>
  )
}

export default CartScreen
