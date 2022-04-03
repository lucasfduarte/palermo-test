import React from 'react'
import { View } from 'react-native'
import { removeItemFromCart } from '../../../global/globalState'
import { Product } from '../../home/product/interfaces'
import { AuxiliaryPriceLabel, ItemImage, ItemTitle, ListItemContainer, PriceLabel, PriceWrapper, RemoveIcon, RemoveIconWrapper } from './styled'

interface iProps {
  product: Product
  indexAtCart: number
}

export const CartListItem = ({ product, indexAtCart }: iProps) => {
  const {
    image,
    title,
    price,
  } = product

  const removeFromCart = () => {
    removeItemFromCart(indexAtCart)
  }

  return (
    <ListItemContainer>
      <ItemImage source={{ uri: image }} resizeMode={'contain'} />
      <View>
        <ItemTitle ellipsizeMode='tail' numberOfLines={1}>{title}</ItemTitle>
        <PriceWrapper>
          <AuxiliaryPriceLabel>
            1x
          </AuxiliaryPriceLabel>
          <PriceLabel>{`$${price && price.toFixed(2)}`}</PriceLabel>
        </PriceWrapper>
      </View>
      <RemoveIconWrapper onPress={removeFromCart}>
        <RemoveIcon source={require('../../../assets/icons/reduce_icon.png')} />
      </RemoveIconWrapper>
    </ListItemContainer>
  )
}
