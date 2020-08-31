import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/MainScreen';
import UzbekUrdu from '../screens/UzbekUrdu';
import Details from '../screens/Details';
import UrduUzbek from '../screens/UrduUzbek';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="UrduUzbek" component={UrduUzbek} />
        <Stack.Screen name="UzbekUrdu" component={UzbekUrdu} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
