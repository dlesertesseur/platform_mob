import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';

import MainNavigator from "./src/Navigation/MainNavigator";

export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  return (
    <SafeAreaProvider style={styles.container}>
      {loaded
      ? <MainNavigator/>
      : <ActivityIndicator size="large"/>}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
