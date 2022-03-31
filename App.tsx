import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './screens/cart/CartScreen';
import { CartScreenHeader } from './screens/cart/CartScreenHeader';
import HomeScreen from './screens/home/HomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
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
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              shadow: 'none',
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
