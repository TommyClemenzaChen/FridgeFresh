import React, { useState } from 'react';
import {
	collection,
	addDoc,
	doc,
	setDoc,
	serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';

const AddFoodToUser = () => {
	const [userId] = useState('YP4sVIViUjHtho8JKtDO'); // Replace with dynamic userId when applicable
	const [food, setFood] = useState({
		name: '',
		expire_time_fridge: '',
		expire_time_freezer: '',
		calories: 0,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFood({ ...food, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// Document reference for the user
			const userDocRef = doc(db, 'users', userId);

			// Set the user profile, if necessary. This overwrites the user's document.
			// Use `updateDoc` if you want to update the profile without overwriting.
			await setDoc(
				userDocRef,
				{
					profile: { name: 'Jane Doe', email: 'janedoe@example.com' },
				},
				{ merge: true }
			); // `merge: true` to not overwrite the entire document

			// Collection reference for the foods subcollection of the user
			const foodsColRef = collection(userDocRef, 'foods');

			// Add a new document to the 'foods' collection
			await addDoc(foodsColRef, {
				name: food.name,
				expire_time_fridge: serverTimestamp(), // Use serverTimestamp for consistency
				expire_time_freezer: serverTimestamp(),
				calories: parseInt(food.calories, 10),
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
			<button type='submit'>Add Food Item</button>
		</form>
	);
};

export default AddFoodToUser;
