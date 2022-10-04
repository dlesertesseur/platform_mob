import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";

const CustomLabel = ({ title, text, style, fontSize = 18, color }) => {

  return (
    <View style={[styles.container, style]}>
      <Text
        style={{
          fontSize: 24,
          color: colors.primary,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: colors.primaryLighter,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default CustomLabel;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    margin:15
  },

  text: {
    fontSize: 24,
    color: colors.secondary,
    fontWeight: "bold",
  },
});
