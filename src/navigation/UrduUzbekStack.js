import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NavigationBlock from '../components/NavigationBlock';
import Details from '../screens/Details';
import UrduUzbek from '../screens/UrduUzbek';

const Stack = createStackNavigator();

function UrduUzbekStack({mlang}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UrduUzbek"
        component={UrduUzbek}
        options={{
          header: (props) => <NavigationBlock {...props} title="Urdu-Uzbek" />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Ma'lumotlar",
          headerStyle: {
            backgroundColor: 'blue',
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

export default UrduUzbekStack;
