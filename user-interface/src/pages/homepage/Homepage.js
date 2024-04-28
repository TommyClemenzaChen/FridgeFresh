import React, { useState, useEffect } from 'react';
import {
	Button,
	View,
	TextInput,
	Modal,
	Platform,
	TouchableOpacity,
	Text,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from './firebase';
import styles from './HomepageStyles';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
	const navigation = useNavigation();
	const [currentUser, setCurrentUser] = useState(null); // State to hold the logged-in user
	const [food, setFood] = useState({
		name: '',
		calories: '',
		imageUri: '',
		expire_time_fridge: new Date(),
		expire_time_freezer: new Date(),
	});
	const [modalVisible, setModalVisible] = useState(false);
	const [isDatePickerShow, setIsDatePickerShow] = useState('');
	const [activeButton, setActiveButton] = useState('');

	// Subscribe to the user's sign-in state
	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				setCurrentUser(user);
			} else {
				// User is signed out
				setCurrentUser(null);
			}
		});

		// Cleanup subscription on unmount
		return unsubscribe;
	}, []);

	const handleInputChange = (name, value) => {
		setFood({ ...food, [name]: value });
	};

	const showDatePicker = (field) => {
		setIsDatePickerShow(field);
		setActiveButton(
			field === 'expire_time_fridge' ? 'fridgeActive' : 'freezerActive'
		);
	};

	const onDateChange = (selectedDate, field) => {
		setIsDatePickerShow(Platform.OS === 'ios' ? field : '');
		if (selectedDate) {
			setFood({ ...food, [field]: selectedDate });
		}
	};

	const handleSubmit = async () => {
		if (!currentUser) {
			console.error('No user is signed in.');
			return;
		}

		try {
			const foodsColRef = collection(db, 'users', currentUser.uid, 'foods');
			await addDoc(foodsColRef, {
				...food,
				expire_time_fridge: food.expire_time_fridge,
				expire_time_freezer: food.expire_time_freezer,
				calories: parseInt(food.calories, 10),
			});

			console.log("Food item added to the user's collection!");
			setModalVisible(false); // Close the modal on success
		} catch (error) {
			console.error('Error adding food item:', error);
		}
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<View style={styles.helpButtonContainer}>
				<TouchableOpacity
					onPress={() => navigation.navigate('Helppage')}
					style={styles.helpButton}>
					<Text style={styles.buttonText}>Help</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				onPress={() => setModalVisible(true)}
				style={styles.newItemButton}>
				<Text style={styles.buttonText}>Add New Food Item</Text>
			</TouchableOpacity>

			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(!modalVisible)}>
				<View style={styles.modalContent}>
					<TextInput
						placeholder='Food Name'
						placeholderTextColor='gray'
						value={food.name}
						onChangeText={(text) => handleInputChange('name', text)}
						style={styles.modalTypedInputs}
					/>
					<TextInput
						placeholder='Calories'
						placeholderTextColor='gray'
						keyboardType='numeric'
						value={food.calories}
						onChangeText={(text) => handleInputChange('calories', text)}
						style={styles.modalTypedInputs}
					/>
					<TextInput
						placeholder='Image URI'
						placeholderTextColor='gray'
						value={food.imageUri}
						onChangeText={(text) => handleInputChange('imageUri', text)}
						style={styles.modalTypedInputs}
					/>
					<TouchableOpacity
						onPress={() => showDatePicker('expire_time_fridge')}
						style={
							activeButton === 'fridgeActive'
								? styles.pickerButtons
								: styles.inactiveButton
						}>
						<Text style={styles.buttonText}>Set Fridge Expiry Date</Text>
					</TouchableOpacity>
					{isDatePickerShow === 'expire_time_fridge' && (
						<View style={styles.datePicker}>
							<DateTimePicker
								value={food.expire_time_fridge}
								mode='date'
								display='default'
								onChange={(event, date) =>
									onDateChange(date, 'expire_time_fridge')
								}
								style={styles.dateSelectors}
							/>
						</View>
					)}
					<TouchableOpacity
						onPress={() => showDatePicker('expire_time_freezer')}
						style={
							activeButton === 'freezerActive'
								? styles.pickerButtons
								: styles.inactiveButton
						}>
						<Text style={styles.buttonText}>Set Freezer Expiry Date</Text>
					</TouchableOpacity>
					{isDatePickerShow === 'expire_time_freezer' && (
						<View style={styles.datePicker}>
							<DateTimePicker
								value={food.expire_time_freezer}
								mode='date'
								display='default'
								onChange={(event, date) =>
									onDateChange(date, 'expire_time_freezer')
								}
								style={styles.dateSelectors}
							/>
						</View>
					)}
					<TouchableOpacity onPress={handleSubmit} style={styles.closeButton}>
						<Text style={styles.buttonText}>Submit Food Item</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setModalVisible(false)}
						style={styles.closeButton}>
						<Text style={styles.buttonText}>Close</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	);
};

export default Homepage;
