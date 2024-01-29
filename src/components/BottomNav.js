import { StyleSheet, Text, View } from 'react-native'
import DiscoverScreen from '../screens/ExploreScreen';
import NoticeScreen from '../screens/NoticeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();


const BottomNav = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Notice"
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={NoticeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color='red' size= '24' />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color= 'red' size= '24' />
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