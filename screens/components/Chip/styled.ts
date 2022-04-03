import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'

export const StandardChip = styled(TouchableOpacity)`
  height: 24px;
  border-radius: 8px;
  align-items: center;
  align-self: center;
  padding: 6px 10px;
  border: 2px solid #B4B4B6;
  margin: 0px 4px;
`

export const ActiveChip = styled(StandardChip)`
  background: #8775FE;
  border: none;
`
export const StandardChipText = styled(Text)`
  color: #B4B4B6;
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
`
export const ActiveChipText = styled(Text)`
  color: #FFFFFF;
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
`
