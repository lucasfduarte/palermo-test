import React from "react";
import { GoToCartButtonWrapper, GoToCartContainer, GoToCartLabel } from "./styled";

interface iProps {
  onPress: () => void
}

export const GoToCart = ({ onPress }: iProps) => {
  return (
    <GoToCartContainer>
      <GoToCartButtonWrapper onPress={onPress}>
        <GoToCartLabel>
          IR PARA CARRINHO
        </GoToCartLabel>
      </GoToCartButtonWrapper>
    </GoToCartContainer>
  )
}
