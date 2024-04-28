import React, { useState, useEffect } from 'react';
import { Button, View, TextInput, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from './firebase';

const Homepage = () => {
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
			<Button title='Add New Food Item' onPress={() => setModalVisible(true)} />

			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(!modalVisible)}>
				<View style={{ marginTop: 50, padding: 20, backgroundColor: 'white' }}>
					<TextInput
						placeholder='Food Name'
						value={food.name}
						onChangeText={(text) => handleInputChange('name', text)}
					/>
					<TextInput
						placeholder='Calories'
						keyboardType='numeric'
						value={food.calories}
						onChangeText={(text) => handleInputChange('calories', text)}
					/>
					<TextInput
						placeholder='Image URI'
						value={food.imageUri}
						onChangeText={(text) => handleInputChange('imageUri', text)}
					/>
					<Button
						title='Set Fridge Expiry Date'
						onPress={() => showDatePicker('expire_time_fridge')}
					/>
					{isDatePickerShow === 'expire_time_fridge' && (
						<DateTimePicker
							value={food.expire_time_fridge}
							mode='date'
							display='default'
							onChange={(event, date) =>
								onDateChange(date, 'expire_time_fridge')
							}
						/>
					)}
					<Button
						title='Set Freezer Expiry Date'
						onPress={() => showDatePicker('expire_time_freezer')}
					/>
					{isDatePickerShow === 'expire_time_freezer' && (
						<DateTimePicker
							value={food.expire_time_freezer}
							mode='date'
							display='default'
							onChange={(event, date) =>
								onDateChange(date, 'expire_time_freezer')
							}
						/>
					)}
					<Button title='Submit Food Item' onPress={handleSubmit} />
					<Button title='Close' onPress={() => setModalVisible(false)} />
				</View>
			</Modal>
		</View>
	);
};

export default Homepage;
