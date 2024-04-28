import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from './SignInStyles';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
      setEmail("");
      setPassword("");
      navigation.navigate("Homepage");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const NavSignUp = () => {
    console.warn("move to sign up page");
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FridgeFresh</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <TouchableOpacity onPress={NavSignUp}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
