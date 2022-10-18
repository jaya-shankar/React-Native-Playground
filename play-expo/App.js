import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {

  return (
    <SafeAreaView style = {styles.container}>
      <WelcomeScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    // issue with currentHeight on Android
    // marginTop : Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop : Platform.OS === "android" ? 45 : 0,
  },
});
