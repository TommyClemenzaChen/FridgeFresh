import React from 'react';
import { useState } from 'react';
import {View, Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import styles from './LoginStyles';
import { performSignIn, performSignUp } from './Authenticator';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  // Login Values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newSignUp, setNewSignUp] = useState(false);
  const [successfulSignUp, setSuccessfulSignUp] = useState('');
  const nav = useNavigation();

  // Handle the login
  const handleLogin = async () => {
    const loginSucesss = await performSignIn(email, password);
    
    if (loginSucesss) {
      nav.navigate('Homepage');
    } else {
      Alert.alert('Invalid login, try again!');
    }
  };

  // Handle a sign up
  const handleSignUp = async () => {
    const existingEmail = await performSignUp(email);
    
    if (existingEmail) {
      Alert.alert('Email already exists, try a different email!');
    } else {
      setEmail('');
      setPassword('');
      setSuccessfulSignUp('You can use this account to sign in!');
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        autoCapitalize='none'
        keyboardType='default'
        onChangeText={setEmail}
        style={styles.input}
        value={email}
        placeholder='Email'
      />
      <TextInput
        autoCapitalize='none'
        keyboardType='default'
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
        value={password}
        placeholder='Password'
      />
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
      {successfulSignUp && <Text style={styles.successMessage}>{successfulSignUp}</Text>}
    </SafeAreaView>
  );
};

export default Login;