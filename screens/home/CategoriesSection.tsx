import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Chip } from '../components/Chip/Chip'
import { DEFAULT_CATEGORY } from './constants'
import { CategoriesContainer, CategoriesSectionLabel } from './styled'

interface iProps {
  categories: string[]
  selectedCategory: string
  setSelected: (category: string) => void
}

export const CategoriesSection = ({ 
  categories,
  selectedCategory,
  setSelected, 
}: iProps) => {
  const handlePress = (category: string) => {
    setSelected(category)
  } 

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
        <Chip 
          selected={selectedCategory === DEFAULT_CATEGORY} 
          label={DEFAULT_CATEGORY}
          onPressFn={() => handlePress(DEFAULT_CATEGORY)} 
        />
        {categories.map((category) => (
          <Chip 
            key={category}
            selected={selectedCategory === category}
            label={category}
            onPressFn={() => handlePress(category)}
          />
        ))}
      </CategoriesContainer>
    </View>
  )
}
