import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import styles from './SignUpStyles';

const SignUp = () => {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const navigation = useNavigation();

	const handleSignUp = async () => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			setEmail('');
			setPassword('');
			navigation.navigate('Homepage');

			// Navigate to another screen or perform additional actions after successful sign-in
		} catch (error) {
			console.error('Error signing up:', error.message);
			// Handle error (e.g., display error message to the user)
		}
	};

	const NavSignIn = () => {
		navigation.navigate('SignIn');
	};

	return (
		<View style={styles.root}>
			<View style={styles.titleContainer}>
				<Text style={styles.welcome}>Welcome to </Text>
				<Text style={styles.fridgeTitle}>Fridge</Text>
				<Text style={styles.freshTitle}>Fresh!</Text>
			</View>
			<TextInput
				style={styles.input}
				placeholder='Enter your email'
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				style={styles.input}
				placeholder='Password'
				value={password}
				secureTextEntry={true}
				onChangeText={setPassword}
			/>

			<Button title='SignUp' onPress={handleSignUp} />

			<View
				style={{ flexDirection: 'row', marginTop: 100, alignItems: 'center' }}>
				<Text>Already have an account?</Text>
				<Button title='Sign in' onPress={NavSignIn} />
			</View>
		</View>
	);
};

export default SignUp;
