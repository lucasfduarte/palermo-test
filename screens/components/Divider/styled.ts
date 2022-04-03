import { View } from 'react-native'
import styled from 'styled-components/native'
import { iProps } from './Divider'

export const DividerView = styled(View)`
  border: ${(props: iProps) => props.noBorder ? 0 : 1}px solid #EBEBED;
  ${(props: iProps) => props.spacing ? `margin: ${props.spacing}px 0px` : ''}
`
