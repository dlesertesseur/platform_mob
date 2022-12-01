import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";

const CustomLabel = ({ title, text, style, fontSize = 18, color }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{marginHorizontal:15}}>
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
            color: colors.primary,
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default CustomLabel;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
  },

  text: {
    fontSize: 24,
    color: colors.secondary,
    fontWeight: "bold",
  },
});
