import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraApp() {
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [cameraRef, setCameraRef] = useState(null);

	if (!permission) {
		// Camera permissions are still loading
		return <View />;
	}

	if (!permission.granted) {
		// Camera permissions are not granted yet
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: 'center' }}>
					We need your permission to show the camera
				</Text>
				<Button onPress={requestPermission} title='grant permission' />
			</View>
		);
	}

	function toggleCameraType() {
		setType((current) =>
			current === CameraType.back ? CameraType.front : CameraType.back
		);
	}
	const takePicture = async () => {
		if (cameraRef) {
			let photo = await cameraRef.takePictureAsync();
			console.log(photo); // You can handle the photo object as needed
		}
	};

	return (
		<View style={styles.container}>
			<Camera
				style={styles.camera}
				type={type}
				ref={(ref) => setCameraRef(ref)}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={takePicture}>
						<Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>
							Take Picture
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={toggleCameraType}>
						<Text style={styles.text}>Flip Camera</Text>
					</TouchableOpacity>
				</View>
			</Camera>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	camera: {
		flex: 1,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		margin: 64,
	},
	button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
	},
});
