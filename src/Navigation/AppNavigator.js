import React from "react";
import TimeAndAttendanceScreen from "../Screens/TimeAndAttendanceScreen";
import i18n from "../Config/i18n";
import TaskStack from "./Stacks/TaskStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

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
        name="tasksScreen"
        component={TaskStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <FontAwesome5 name="tasks" size={24} color={colors.secondary} />
                <Text style={styles.text}>{i18n.t("tab.task")}</Text>
              </View>
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
              <View style={styles.item}>
                <FontAwesome5
                  name="stopwatch"
                  size={24}
                  color={colors.secondary}
                />
                <Text style={styles.text}>
                  {i18n.t("tab.timeAndAttendance")}
                </Text>
              </View>
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
