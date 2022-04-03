import React from 'react'
import { View } from 'react-native'
import { Product } from './interfaces'
import { ProductItem } from './ProductItem'
import { NewProductsListContainer, SectionLabel } from './styled'

interface iProps {
  products: Product[]
}

export const NewProductsList = ({ products }: iProps) => {
  return (
    <View>
      <SectionLabel>
        Novidades
      </SectionLabel>
      <NewProductsListContainer
        horizontal={true}
        contentContainerStyle={{
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
        }}
      >
        {products.map((product, index) => (
          <ProductItem key={product.id || index} product={product} />
        ))}
      </NewProductsListContainer>
    </View>
  )
}
