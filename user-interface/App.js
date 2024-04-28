import React from 'react';
import Navigator from './Navigator';
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { PlayfairDisplay_800ExtraBold_Italic } from "@expo-google-fonts/playfair-display";

const App = () => {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_800ExtraBold_Italic,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return ( 
    
    <Navigator />
    
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






export default App;