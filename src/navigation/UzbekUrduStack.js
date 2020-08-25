import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductDetails from '../screens/Details';
import UzbekUrdu from '../screens/UzbekUrdu';
import NavigationBlock from '../components/NavigationBlock';
import Details from '../screens/Details';

const Stack = createStackNavigator();

function UzbekUrduStack({mlang}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UzbekUrduStack"
        component={UzbekUrdu}
        options={{
          header: (props) => <NavigationBlock {...props} title="Uzbek-Urdu" />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Ma'lumotlar",
          headerStyle: {
            backgroundColor: '#4e73df',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 24,
            alignItems: 'center',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default UzbekUrduStack;
