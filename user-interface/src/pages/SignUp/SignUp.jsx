import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from './SignUpStyles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      setEmail('');
      setPassword('');
      navigation.navigate('Homepage');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const NavSignIn = () => {
    console.warn('Move to sign in page');
    navigation.navigate('SignIn');
  };

  return (
    <View style={signUpStyles.container}>
      <View style={signUpStyles.root}>
        <Text style={signUpStyles.title}>FridgeFresh</Text>
        <TextInput
          style={signUpStyles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={signUpStyles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Button title="Sign Up" onPress={handleSignUp} />
        <View style={signUpStyles.linkContainer}>
          <Text>Already have an account?</Text>
          <Button title="Sign in" onPress={NavSignIn} />
        </View>
      </View>
    </View>
  );
};

export default SignUp;
