import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './SignInStyles';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigation = useNavigation();

	const handleSignIn = async () => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			console.log('User signed up:', user);
			setEmail('');
			setPassword('');
			navigation.navigate('Homepage');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Homepage' }],
      });
		} catch (error) {
			console.error('Error signing up:', error.message);
		}
	};

	const NavSignUp = () => {
		navigation.navigate('SignUp');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>FridgeFresh</Text>
			<TextInput
				style={styles.input}
				placeholder='Email'
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
			<View style={styles.signInContainer}>
				<TouchableOpacity onPress={handleSignIn} style={styles.button}>
					<Text style={styles.signInButtonText}>Sign In</Text>
					<Ionicons name="arrow-forward" size={40} color="white" />
				</TouchableOpacity>
			</View>

			<TouchableOpacity onPress={NavSignUp}>
				<Text style={styles.link}>Don't have an account? Sign Up</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SignUp;
