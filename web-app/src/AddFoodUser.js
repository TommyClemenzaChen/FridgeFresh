import React, { useState } from 'react';
import {
	collection,
	addDoc,
	doc,
	setDoc,
	serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddFoodToUser = () => {
	const [userId] = useState('YP4sVIViUjHtho8JKtDO');
	const [food, setFood] = useState({
		name: '',
		expire_time_fridge: '',
		expire_time_freezer: '',
		calories: 0,
		imageUri: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFood({ ...food, [name]: value });
	};

	const saveImageUri = async (uri) => {
		try {
			await AsyncStorage.setItem('imageUri', uri);
			console.log('Image URI saved successfully.');
		} catch (error) {
			console.error('Error saving image URI:', error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const userDocRef = doc(db, 'users', userId);
			await setDoc(
				userDocRef,
				{ profile: { name: 'Jane Doe', email: 'janedoe@example.com' } },
				{ merge: true }
			);

			const foodsColRef = collection(userDocRef, 'foods');
			await addDoc(foodsColRef, {
				name: food.name,
				expire_time_fridge: serverTimestamp(),
				expire_time_freezer: serverTimestamp(),
				calories: parseInt(food.calories, 10),
				imageUri: food.imageUri, // Add this line to include the imageUri in the Firestore document
			});

			console.log('Food item added to user!');
		} catch (error) {
			console.error('Error adding food to user: ', error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				placeholder='Food Name'
				value={food.name}
				onChange={handleInputChange}
			/>
			<input
				type='date'
				name='expire_time_fridge'
				value={food.expire_time_fridge}
				onChange={handleInputChange}
			/>
			<input
				type='date'
				name='expire_time_freezer'
				value={food.expire_time_freezer}
				onChange={handleInputChange}
			/>
			<input
				type='number'
				name='calories'
				placeholder='Calories'
				value={food.calories}
				onChange={handleInputChange}
			/>
			<input
				type='text'
				name='imageUri'
				placeholder='Image URI'
				value={food.imageUri}
				onChange={handleInputChange}
			/>
			<button type='submit'>Add Food Item</button>
		</form>
	);
};

export default AddFoodToUser;
