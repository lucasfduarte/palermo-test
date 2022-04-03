import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { setGlobal } from 'reactn';
import { initialGlobalState } from './global/globalState';
import CartScreen from './screens/cart/CartScreen';
import { ConfirmationScreen } from './screens/confirmation/ConfirmationScreen';
import HomeScreen from './screens/home/HomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    setGlobal(initialGlobalState)
  }, [])

  return (
    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            headerShown: false
          }}
        />
        <Screen
          name='Cart'
          component={CartScreen}
          options={{
            title: 'CARRINHO',
            headerTitleAlign: 'center',
            headerTintColor: '#85868A',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 12,
            },
            headerStyle: {
              // @ts-ignore
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              shadow: 'none',
            },
          }}
        />
        <Screen 
          name='Success'
          component={ConfirmationScreen}
          options={{
            headerShown: false
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
