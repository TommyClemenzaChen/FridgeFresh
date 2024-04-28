import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

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

      // Navigate to another screen or perform additional actions after successful sign-in
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle error (e.g., display error message to the user)
    }
  };

  const NavSignUp = () => {
    console.warn("move to sign up page");
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 25, fontFamily: "American Typewriter" }}>
        {" "}
        FridgeFresh
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
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

      <Button title="SignIn" onPress={handleSignIn} />

      <View
        style={{ flexDirection: "row", marginTop: 100, alignItems: "center" }}
      >
        <Text>Already have an account?</Text>
        <Button title="Sign up" onPress={NavSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,

    height: 100,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    //darker yellow color
    color: "#FFD700",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
export default SignUp;
