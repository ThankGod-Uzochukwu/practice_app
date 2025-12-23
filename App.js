import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigation from './src/components/Navigation';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import BottomNav from './src/components/BottomNav';
import DrawerNav from './src/components/DrawerNav';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        {/* <Navigation /> */}

        <BottomNav /> 
        {/* <DrawerNav /> */}
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({});
