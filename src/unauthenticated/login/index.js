import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import Spinner from "react-native-loading-spinner-overlay";
  
  const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    const handleLogin = async () => {
      setIsLoading(true);
  
      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        const data = await response.json();
        setIsLoading(false);
  
        if (response.ok) {
          navigation.navigate("Home");
        } else {
          alert(data.message || "Invalid Credential, Please Try Again");
        }
      } catch (error) {
        setIsLoading(false);
        alert("An error occurred. Please try again.");
        console.error(error);
      }
    };
  
    return (
      <SafeAreaView style={styles.root}>
        <Spinner visible={isLoading} />
        <View>
          <Text style={styles.text}>LOGIN</Text>
  
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
  
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
  
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={styles.login}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", margin: "5%" }}>
              <Text>No account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={{ color: "blue", fontWeight: "bold" }}>
                  REGISTER
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      marginTop: "5%",
    },
    text: {
      fontSize: 30,
      fontWeight: "700",
      paddingLeft: "7%",
    },
    input: {
      borderWidth: 1,
      padding: 20,
      margin: "5%",
      borderRadius: 10,
    },
    button: {
      backgroundColor: "#1F1E1E",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      width: "91%",
      height: "30%",
      marginLeft: "5%",
    },
    login: {
      color: "white",
      fontWeight: "bold",
    },
  });
  