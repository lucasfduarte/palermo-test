import { View, Image, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const ListItemContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 9px;
  height: 72px;
  width: 100%;
  background: #ECE9FF;
  border-radius: 12px;
  margin: 16px 0px;
`

export const ItemImage = styled(Image)`
  width: 38px;
  height: 50px;
  margin: 0px 10px;
  border-radius: 10px;
`

export const ItemTitle = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
  margin: 2px 0px;
  max-width: 220px;
`

export const PriceWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 12px;
  margin: 2px 0px;
`
export const AuxiliaryPriceLabel =  styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #8775FE;
  margin-right: 6px;
`
export const PriceLabel = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #8775FE;
`

export const RemoveIconWrapper = styled(TouchableOpacity)`
  height: 23px;
  width: 36px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  position: absolute;
  right: 10px;
`

export const RemoveIcon = styled(Image)`
  width: 10px;
  height: 10px;
`

export const CartListFooterContainer = styled(View)`
  background-color: #ffffff;
`

export const PriceSumContainer = styled(View)`
  width: 100%;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
`

export const PriceSumLabel = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #404040;
  padding: 0px -6px;
`

export const PriceSumAmountLabel = styled(PriceSumLabel)`
  color: #000000;
`
