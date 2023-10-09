import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useContext, useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (e) =>{
        e.preventDefault();
    
        await fetch('http://restapi.adequateshop.com/api/authaccount/login', {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
      body: await JSON.stringify({
        email,
        password,
      }),
      
    });
        if (email !== 'email' && password !== 'password') {
            navigation.navigate('Home');
        } else {
            alert('Invalid Credential, Please Try Again');
        }
    };
      

  return (
    <SafeAreaView style={styles.root}>
        {/* <Spinner visible={isLoading}/> */}
        <View>
            <Text style={styles.text}>LOGIN</Text>

            <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            />

            <TextInput
            placeholder='Password'
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
            />

            <View>

                <TouchableOpacity 
                style={styles.button}
                onPress={handleLogin}
                // onPress={() => {
                //   login(email, password);
                //   }}
                >
                    <Text style={styles.login}>LOGIN</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', margin: '5%', }}>
                    <Text>No account?   </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{color:'blue', fontWeight: "bold"}}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    </SafeAreaView>
  )
};

export default LoginScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        marginTop: '5%'
    },
    text:{
        fontSize: 30,
        fontWeight:"700",
        paddingLeft: '7%'
    },
    input:{
        borderWidth:1,
        padding: 20,
        margin: '5%',
        borderRadius: 10
    },
    button:{
        backgroundColor: '#1F1E1E',
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10,
        width: '91%',
        height: '30%',
        marginLeft: "5%",
    },
    login:{
        color: 'white', 
        fontWeight: 'bold'
        
    },
})