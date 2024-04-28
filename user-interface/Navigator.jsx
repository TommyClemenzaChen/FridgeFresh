import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import Homepage from "./src/pages/homepage/Homepage";
import SignUp from "./src/pages/SignUp/SignUp";
import SignIn from "./src/pages/login/SignIn";
import Helppage from "./src/pages/help/Helppage";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{headerShown: false}}  
        />
        <Stack.Screen 
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}   
        />
        <Stack.Screen 
          name="Homepage" 
          component={Homepage} 
          options={({ navigation }) => ({
            headerShown: false,
            //headerRight: () => (
              //<TouchableOpacity onPress={() => navigation.navigate('Helppage')}>
                //<Text style={{ marginRight: 10, color: 'blue' }}>Help</Text>
              //</TouchableOpacity>
            //),
          })}
        />
        <Stack.Screen name="Helppage" component={Helppage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
