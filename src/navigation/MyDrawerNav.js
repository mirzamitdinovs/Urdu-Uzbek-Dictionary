import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SideMenu from './SideMenu';
import UrduUzbekStack from './UrduUzbekStack';
import UzbekUrduStack from './UzbekUrduStack';

const Drawer = createDrawerNavigator();

export default function MyDrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="UrduUzbekStack"
        drawerContent={(props) => <SideMenu {...props} />}>
        <Drawer.Screen name="UrduUzbek" component={UrduUzbekStack} />
        <Drawer.Screen name="UzbekUrdu" component={UzbekUrduStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
