import { Text, View, Image, SafeAreaView } from 'react-native'
import styled from 'styled-components'

export const Container = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  backgroundColor: #ffffff;
  justify-content: flex-start;
  padding: 40px 18px 16px;
  width: 100%;
`

export const Headline = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
`

export const TopRow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`

export const Icon = styled(Image)`
  width: 22px;
  height: 22px;
`
