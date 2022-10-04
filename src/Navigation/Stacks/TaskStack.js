import React from "react";
import CollectInformationScreen from "../../Screens/CollectInformationScreen";
import ScanScreen from "../../Screens/ScanScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="collectInformationScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="collectInformationScreen" component={CollectInformationScreen}></Stack.Screen>
      <Stack.Screen name="scanScreen" component={ScanScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default TaskStack;

