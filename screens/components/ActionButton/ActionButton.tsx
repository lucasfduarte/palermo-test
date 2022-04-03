import React from "react";
import { ActionButtonWrapper, ActionButtonContainer, ActionButtonLabel } from "./styled";

interface iProps {
  label: string
  onPress: () => void
}

export const ActionButton = ({ onPress, label }: iProps) => {
  return (
    <ActionButtonContainer>
      <ActionButtonWrapper onPress={onPress}>
        <ActionButtonLabel>
          {label}
        </ActionButtonLabel>
      </ActionButtonWrapper>
    </ActionButtonContainer>
  )
}
