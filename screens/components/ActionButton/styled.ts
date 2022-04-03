import { TouchableOpacity, View, Text } from 'react-native'
import styled from 'styled-components/native'

export const ActionButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 29px 29px 0px;
  width: 100%;
  height: 90px;
  background: #FFFFFF;
`

export const ActionButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 50px;
  background: #504DB6;
  box-shadow: 0px 7px 5px rgba(194, 193, 248, 0.3);
  border-radius: 37px;
`

export const ActionButtonLabel = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
`
