import { View, Image, Text } from 'react-native'
import styled from 'styled-components/native'
import { ActionButtonWrapper } from '../components/ActionButton/styled'

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  background: #8775FE;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled(Image)`
  width: 160px;
  height: 160px;
  margin: 30px 0px;
`

export const Title = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  margin: 10px 0px;
`

export const Subtitle = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0px;
  color: #FFFFFF;
`

export const Button = styled(ActionButtonWrapper)`
  position: absolute;
  bottom: 30px;
  width: 90%;
`
