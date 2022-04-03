import { View, Text, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const CartTitle = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 32px;
`
export const EmptyCartWrapper = styled(View)`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
` 

export const EmptyCartContainer = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const EmptyCartText = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #9A9999;
  width: 50%;
  margin-bottom: 15px;
`
export const EmptyCartIcon = styled(Image)`
  width: 68px;
  height: 68px;
  margin-bottom: 10px;
`
export const EmptyCartButton = styled(TouchableOpacity)`
  width: 90%;
  background: #8775FE;
  box-shadow: 0px 7px 5px rgba(194, 193, 248, 0.3);
  height: 37px;
  border-radius: 37px;
  align-items: center;
  justify-content: center;
`
export const EmptyCartButtonText = styled(Text)`
  color: #FFFFFF;
  font-weight: 700;
`
