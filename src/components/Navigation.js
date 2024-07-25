import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notice from '../screens/notice/index'
import Home from '../screens/home/index'
import Explore from '../screens/explore/index'
import Login from '../screens/login/index'
import Register from '../screens/register/index'



const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    // <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Explore" component={Explore} />
        <Stack.Screen options={{headerShown: false}} name="Notice" component={Notice} />
    </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default Navigation