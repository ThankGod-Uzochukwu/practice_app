import { View, Text } from "react-native";
import React from "react";

const Header = ({ title, text }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 15,
          color: "purple",
          alignSelf: "center",
        }}
      >
        {title}
      </Text>
      <Text>{text}</Text>
    </View>
  );
};

export default Header;
