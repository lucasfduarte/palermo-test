import React from 'react'
import { CheckoutButtonIcon, CheckoutButtonWrapper } from './styled'

interface iProps {
  onPressFn: () => void
}

export const CheckoutButton = ({ onPressFn }: iProps) => {
  return (
    <CheckoutButtonWrapper onPress={onPressFn}>
      <CheckoutButtonIcon source={require('../../../assets/icons/add_icon.png')} />
    </CheckoutButtonWrapper>
  )
}
