import React from "react";
import LoginScreen from "../../Screens/LoginScreen";
import SignUpScreen from "../../Screens/SignUpScreen ";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;

