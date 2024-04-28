import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';
import {
	initializeAuth,
	getReactNativePersistence,
	onAuthStateChanged,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseApp } from './firebase'; // Ensure this path is correct

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(firebaseApp, {
	persistence: getReactNativePersistence(AsyncStorage),
});

export default function App() {
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [camera, setCamera] = useState(null);
	const [image, setImage] = useState(null);

	useEffect(() => {
		(async () => {
			const cameraStatus = await Camera.requestPermissionsAsync();
			setHasCameraPermission(cameraStatus.status === 'granted');

			// Listen for authentication state to change.
			const unsubscribe = onAuthStateChanged(auth, (user) => {
				if (user) {
					// User is signed in
					console.log('We are authenticated now!');
				}
				// ...
			});

			// Cleanup subscription on unmount
			return unsubscribe;
		})();
	}, []);

	const takePicture = async () => {
		if (camera) {
			const data = await camera.takePictureAsync(null);
			setImage(data);
		}
	};

	const saveImage = async () => {
		if (!image) {
			console.log('No image to save');
			return;
		}

		console.log('Saving image...');
		const apiUrl = 'http://127.0.0.1:5000/predict'; // Replace <your-local-ip> with the IP address of your server

		try {
			const formData = new FormData();
			formData.append('image', {
				uri: image.uri,
				type: 'image/jpeg', // Or the correct mime type of your image
				name: 'photo.jpg',
			});

			const response = await axios.post(apiUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			console.log('Upload success:', response.data);
		} catch (error) {
			console.log('Error uploading image:', error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.cameraContainer}>
				<Camera ref={(ref) => setCamera(ref)} style={styles.camera} />
			</View>
			<Button title='Take Picture' onPress={takePicture} />
			{image && (
				<Image source={{ uri: image.uri }} style={styles.previewImage} />
			)}
			{image && <Button title='Save Picture' onPress={saveImage} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	cameraContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	camera: {
		flex: 1,
		aspectRatio: 1,
	},
	previewImage: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	buttonContainer: {
		flex: 0.1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
});
