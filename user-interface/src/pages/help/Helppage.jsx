import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './HelppageStyles'; // Make sure to create this file

const HelpPage = () => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>How to Use the App</Text>
			<Text style={styles.text}>
				Welcome to FridgeFresh! Here's how to get started:
			</Text>
			<Text style={styles.sectionTitle}>Adding Items</Text>
			<Text style={styles.text}>
				- To add items, navigate to the Home Page and tap on 'Add New Food
				Item'. - Fill in the details about the food, including the name,
				expiration dates, and calories. - If you have an image, you can also add
				an Image URI. - Tap 'Submit' to add the item to your fridge.
			</Text>
			<Text style={styles.sectionTitle}>Viewing Items</Text>
			<Text style={styles.text}>
				- All items in your fridge can be viewed from the Home Page. - You'll
				see an image of the item, its name, and a countdown to its expiration.
			</Text>
			<Text style={styles.sectionTitle}>Account Management</Text>
			<Text style={styles.text}>
				- Use the Account button to view your user information or to log out.
			</Text>
			<Text style={styles.sectionTitle}>Help and Support</Text>
			<Text style={styles.text}>
				- If you need help, tap the Help button on the Home Page.
			</Text>
			<Text style={styles.sectionTitle}>Using the Camera</Text>
			<Text style={styles.text}>
				- To use the camera for adding items, tap the Camera button. - After
				taking a photo, you can choose to use it or retake it.
			</Text>
		</ScrollView>
	);
};

export default HelpPage;
