import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigation from './src/components/Navigation';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import BottomNav from './src/components/BottomNav';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Navigation />

        {/* <BottomNav />  */}
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
