import React from 'react'
import { View, Text } from 'react-native'
import { Chip } from '../components/Chip/Chip'
import { CategoriesContainer, CategoriesSectionLabel } from './styled'

interface iProps {
  categories: string[]
}

export const CategoriesSection = ({ categories }: iProps) => {
  // test with a lot of categories
  return (
    <View>
      <CategoriesSectionLabel>
        FILTRAR CATEGORIA
      </CategoriesSectionLabel>
      <CategoriesContainer 
        horizontal={true}
        contentContainerStyle={{
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
        }}
      >
        {categories.map((category) => (
          <Chip key={category} selected={false} label={category} />
        ))}
      </CategoriesContainer>
    </View>
  )
}
