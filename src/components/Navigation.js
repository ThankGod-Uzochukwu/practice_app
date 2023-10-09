import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import NoticeScreen from '../screens/NoticeScreen';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './BottomNav';
import ExploreScreen from '../screens/ExploreScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    // <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Explore" component={ExploreScreen} />
        <Stack.Screen options={{headerShown: false}} name="Notice" component={NoticeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Bottom" component={BottomNav} />
    </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default Navigation