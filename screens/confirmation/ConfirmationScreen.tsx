import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { resetCartState } from '../../global/globalState'
import { ActionButtonLabel } from '../components/ActionButton/styled'
import { Button, Container, Icon, Subtitle, Title } from './styled'

interface iProps {
  navigation: NativeStackNavigationProp<any>
}

export const ConfirmationScreen = ({ navigation }: iProps) => {
  const goToHomeScreen = () => {
    resetCartState()
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Icon source={require('../../assets/icons/confirmation_icon.png')} />
      <Title>SUCESSO!</Title>
      <Subtitle>
        Compra realizada com sucesso, aproveite!
      </Subtitle>
      <Button style={styles.shadowProp} onPress={goToHomeScreen}>
        <ActionButtonLabel>
          PROSSEGUIR
        </ActionButtonLabel>
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#c2c1f84d',
    shadowOffset: {width: 7, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 37,
  },
})
