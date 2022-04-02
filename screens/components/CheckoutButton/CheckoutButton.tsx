import React from 'react'
import { CheckoutButtonIcon, CheckoutButtonWrapper } from './styled'

export const CheckoutButton = () => {
  return (
    <CheckoutButtonWrapper>
      <CheckoutButtonIcon source={require('../../../assets/icons/add_icon.png')} />
    </CheckoutButtonWrapper>
  )
}
