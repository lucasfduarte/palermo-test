import { TouchableOpacity, Image } from 'react-native'
import styled from 'styled-components'

export const CheckoutButtonWrapper = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #9A8BFF;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CheckoutButtonIcon = styled(Image)`
  height: 10px;
  width: 10px;
` 