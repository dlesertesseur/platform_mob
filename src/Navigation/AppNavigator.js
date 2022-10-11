import React from "react";
import i18n from "../Config/i18n";
import TimeAndAttendanceScreen from "../Screens/TimeAndAttendanceScreen";
import TaskStack from "./Stacks/TaskStack";
import AccountScreen from "../Screens/AccountScreen";
import CustomTabBarIcon from "../Components/CustomTabBarIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";

const BottomTabs = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="users"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabBarIcon
                text={i18n.t("tab.task")}
                focused={focused}
                iconName={"user-alt"}
              />
            );
          },
        }}
      />

      <BottomTabs.Screen
        name="tasksScreen"
        component={TaskStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabBarIcon
                focused={focused}
                text={i18n.t("tab.task")}
                iconName={"tasks"}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="timeAndAttendanceScreen"
        component={TimeAndAttendanceScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabBarIcon
                focused={focused}
                text={i18n.t("tab.timeAndAttendance")}
                iconName={"stopwatch"}
              />
            );
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 2,
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    borderRadius: 4,
    height: 70,
    backgroundColor: colors.primary,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.secondary,
  },
});

export default AppNavigator;
