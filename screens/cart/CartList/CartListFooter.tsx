import React from "react";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { Divider } from "../../components/Divider/Divider";
import { CartListFooterContainer, PriceSumAmountLabel, PriceSumContainer, PriceSumLabel } from "./styled";

interface iProps {
  priceSum: number
  onPressButton: () => void
}

export const CartListFooter = ({ 
  priceSum,
  onPressButton 
}: iProps) => {

  return (
    <CartListFooterContainer>
      <Divider spacing={0} />
      <PriceSumContainer>
        <PriceSumLabel>
          Total:
        </PriceSumLabel>
        <PriceSumAmountLabel>
          {`$${priceSum && priceSum.toFixed(2)}`}
        </PriceSumAmountLabel>
      </PriceSumContainer>
      <Divider spacing={0} />
      <ActionButton label="FINALIZAR COMPRA" onPress={onPressButton} />
    </CartListFooterContainer>
  )
}
