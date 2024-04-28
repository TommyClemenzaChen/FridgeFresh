import React from 'react';
import { useState } from 'react';
import {View, Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import styles from './LoginStyles';

const Login = () => {
  // Login Values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [existingUser, setExistingUser] = useState(false);

  // Dummy Test Logins
  const users = ['alice', 'bob', 'carol'];
  const passwords = ['alicePass', 'bobPass', 'carolPass'];

  // Handle the login
  const handleLogin = () => {
    const userIndex = users.indexOf(username);
    if (userIndex !== -1 && passwords[userIndex] === password) {
      Alert.alert('Success', 'You have successfully logged in!');
    } else {
      Alert.alert('Failure', 'Your user name and/or password are not valid, please try again!');
    }
  };

  // Handle a sign up
  const handleSignUp = () => {
    Alert.alert('Success', 'This is not implemented yet!');
  };

  return (
    <SafeAreaView>
      <TextInput
        keyboardType='default'
        onChangeText={setUsername}
        style={styles.input}
        value={username}
        placeholder='Username'
      />
      <TextInput
        keyboardType='default'
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
        value={password}
        placeholder='Password'
      />
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </SafeAreaView>
  );
};

export default Login;