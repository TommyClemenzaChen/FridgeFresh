import React from 'react';
import Navigator from './Navigator';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login/Login';

const App = () => {
  return ( 
    <View style={styles.container}>
      <Navigator />
    </View>
  )
};

export default App;