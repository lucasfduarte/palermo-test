import React from "react";
import { EmptyCartButton, EmptyCartButtonText, EmptyCartContainer, EmptyCartIcon, EmptyCartText } from "./styled";

interface EmptyCardProps {
  handleAction: () => void
}

export const EmptyCard = ({ handleAction }: EmptyCardProps) => {

  return (
    <EmptyCartContainer>
      <EmptyCartIcon source={require('../../assets/icons/empty_bag.png')} />
      <EmptyCartText>
        Nenhum item adicionado no carrinho.
      </EmptyCartText>
      <EmptyCartButton
        onPress={handleAction}
      >
        <EmptyCartButtonText>ADICIONAR ITENS</EmptyCartButtonText>
      </EmptyCartButton>
    </EmptyCartContainer>
  )
}
