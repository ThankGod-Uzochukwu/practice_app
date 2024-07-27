import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister() {
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://restapi.adequateshop.com/api/authaccount/registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        navigation.navigate("Home");
      } else {
        alert(data.message || "Registration failed, please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      alert("An error occurred. Please try again.");
      console.error(error);
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <Spinner visible={isLoading} />
      <View style={styles.all}>
        <Text style={styles.text}>REGISTER</Text>

        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />

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
            onPress={handleRegister}
          >
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", margin: "5%" }}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "blue", fontWeight: "bold" }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
  register: {
    color: "white",
    fontWeight: "bold",
  },
});
