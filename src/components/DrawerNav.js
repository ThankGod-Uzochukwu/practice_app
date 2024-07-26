import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../authenticated/home';
import Setting from '../authenticated/setting' 
import MapView from '../authenticated/maps'

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="MapView" component={MapView} />

    </Drawer.Navigator>
  );
};

export default DrawerNav;
