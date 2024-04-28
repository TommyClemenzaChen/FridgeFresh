import React, { useState, useEffect } from 'react';
import {
	collection,
	addDoc,
	doc,
	setDoc,
	serverTimestamp,
} from 'firebase/firestore';
import { db, auth } from './firebase';
import {
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const AddFoodToUser = () => {
	const [user, setUser] = useState(null);
	const [food, setFood] = useState({
		name: '',
		expire_time_fridge: '',
		expire_time_freezer: '',
		calories: 0,
		imageUri: '',
	});

	// Firebase Auth instance
	const auth = getAuth();

	// Subscribe to the user's sign-in state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => unsubscribe();
	}, []);

	// Handle input changes for form fields
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFood({ ...food, [name]: value });
	};

	// Function to handle Google Login
	const handleGoogleLogin = async () => {
		const provider = new GoogleAuthProvider();
		try {
			await signInWithPopup(auth, provider);
		} catch (error) {
			console.error('Error during Google sign-in:', error.message);
		}
	};

	// Function to submit form and add food item to Firestore
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			console.error('No user signed in');
			return;
		}

		try {
			const userDocRef = doc(db, 'users', user.uid);

			const foodsColRef = collection(userDocRef, 'foods');
			await addDoc(foodsColRef, {
				...food,
				expire_time_fridge: serverTimestamp(),
				expire_time_freezer: serverTimestamp(),
				calories: parseInt(food.calories, 10),
				// Note: Here you should probably convert imageUri to a file or store it properly as needed.
			});

			console.log('Food item added to user!');
		} catch (error) {
			console.error('Error adding food to user:', error);
		}
	};

	return (
		<div>
			{user ? (
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
			) : (
				<button onClick={handleGoogleLogin}>Login with Google</button>
			)}
		</div>
	);
};

export default AddFoodToUser;
