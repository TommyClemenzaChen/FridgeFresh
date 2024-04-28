import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import axios from 'axios';
import { auth } from './firebaseConfig'; // Adjust the path to where your firebaseConfig.js is located
import { AppRegistry } from 'react-native';
// import App from './App';
import { onAuthStateChanged } from 'firebase/auth';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// ...rest of your code

// No need to call initializeAuth here, as it's already done in firebaseConfig.js

export default function App() {
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [camera, setCamera] = useState(null);
	const [image, setImage] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasCameraPermission(status === 'granted');
		})();

		const unsubscribe = onAuthStateChanged(auth, (user2) => {
			if (user) {
				console.log('Authenticated:', user);
			} else {
				console.log('User is signed out');
			}
		});

		return () => unsubscribe(); // Cleanup subscription
	}, []);

	const takePicture = async () => {
		if (camera) {
			const data = await camera.takePictureAsync();
			setImage(data);
			console.log('Picture taken:', data);
		}
	};

	const saveImage = async () => {
		console.log('Saving image...');

		if (!image) {
			console.log('No image to save');
			return;
		}

		try {
			const apiUrl = 'http://192.168.1.2:5000/predict'; // Use your actual local IP here

			const formData = new FormData();
			formData.append('image', {
				uri: image.uri,
				type: 'image/jpeg',
				name: 'image.jpg',
			});

			const response = await axios.post(apiUrl, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			console.log('Upload success:', response.data);
		} catch (error) {
			console.log('Error uploading image');
			console.log(error);
		}
	};

	if (hasCameraPermission === null) {
		return <View />;
	}
	if (hasCameraPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<View style={styles.cameraContainer}>
				<Camera
					ref={(ref) => setCamera(ref)}
					style={styles.fixedRatio}
					ratio={'1:1'}
				/>
			</View>
			{image && <Image source={{ uri: image.uri }} style={styles.preview} />}
			<Button title='Take Picture' onPress={takePicture} />
			{image && <Button title='Save Picture' onPress={saveImage} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	cameraContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	fixedRatio: {
		flex: 1,
		aspectRatio: 1,
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	pictureButton: {
		flex: 0.1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
	saveImageButton: {
		flex: 0.1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
});
