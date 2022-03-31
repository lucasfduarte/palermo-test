import { ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'

export const CategoriesContainer = styled(ScrollView)`
  height: 30px;
  display: flex;
`

export const CategoriesSectionLabel = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #6F6F6F;
  margin-bottom: 4px;
`
