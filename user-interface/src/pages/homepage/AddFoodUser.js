import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

const AddFoodToUser = ({ showModal, closeModal }) => {
	const [food, setFood] = useState({
		name: '',
		expire_time_fridge: '',
		expire_time_freezer: '',
		calories: 0,
		imageUri: '',
	});

	// Handle input changes for form fields
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFood({ ...food, [name]: value });
	};

	// Function to submit form and add food item to Firestore
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const foodsColRef = collection(db, 'foods');
			await addDoc(foodsColRef, {
				...food,
				expire_time_fridge: serverTimestamp(),
				expire_time_freezer: serverTimestamp(),
				calories: parseInt(food.calories, 10),
				// Note: Here you should probably convert imageUri to a file or store it properly as needed.
			});

			console.log('Food item added!');
			closeModal(); // Close the modal on success
		} catch (error) {
			console.error('Error adding food item:', error);
		}
	};

	return (
		<div style={{ display: showModal ? 'block' : 'none' }}>
			{' '}
			{/* This controls the display of the modal */}
			<form onSubmit={handleSubmit}>{/* Form inputs remain unchanged */}</form>
			<button onClick={closeModal}>Close</button>
		</div>
	);
};

export default AddFoodToUser;
