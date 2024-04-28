import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login/Login';
import Homepage from './src/pages/homepage/Homepage';

const Stack = createStackNavigator();

const Navigator = () => { 
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={ Login } />  
        <Stack.Screen name='Homepage' component={ Homepage } />
      </Stack.Navigator> 
    </NavigationContainer>
  );

};

export default Navigator;