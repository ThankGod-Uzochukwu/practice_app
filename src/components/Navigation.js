import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notice from '../authenticated/notice/index'
import Home from '../authenticated/home/index'
import Explore from '../authenticated/explore/index'
import Login from '../unauthenticated/login/index'
import Register from '../unauthenticated/register/index'



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