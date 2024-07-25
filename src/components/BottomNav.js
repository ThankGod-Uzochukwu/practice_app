import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Notice from '../screens/notice/index'
import Profile from '../screens/profile/index'
import Home from '../screens/home';
import { Ionicons } from '@expo/vector-icons';





const Tab = createBottomTabNavigator();


const BottomNav = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
        headerShown: false,
        }}
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Notice"
          component={Notice}
          options={{
            tabBarLabel: 'Notice',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
         
  )
}

export default BottomNav

const styles = StyleSheet.create({

})