import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainNavigator from "./src/Navigation/MainNavigator";

export default function App() {

  return (
    <SafeAreaProvider style={styles.container}>
      <MainNavigator/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
