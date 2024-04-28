import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
	auth,
	db,
} from 'firebase/firestore';

const ViewFoods = ({ userUid }) => {
	const [foods, setFoods] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchFoods = async () => {
			try {
				const foodsCollectionRef = collection(db, 'users', userUid, 'foods');
				const q = query(foodsCollectionRef);
				const querySnapshot = await getDocs(q);
				const foodsList = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setFoods(foodsList);
			} catch (error) {
				console.error('Error fetching foods: ', error);
			}
			setLoading(false);
		};

		fetchFoods();
	}, [userUid]);

	if (loading) {
		return <Text>Loading...</Text>;
	}

	return (
		<ScrollView style={styles.container}>
			{foods.map((food) => (
				<View key={food.id} style={styles.foodItem}>
					<Text>Name: {food.name}</Text>
					<Text>Calories: {food.calories}</Text>
					<Text>
						Expiration Date (Freezer):{' '}
						{food.expire_time_freezer?.toDate().toLocaleString()}
					</Text>
					<Text>
						Expiration Date (Fridge):{' '}
						{food.expire_time_fridge?.toDate().toLocaleString()}
					</Text>
					{/* Add other fields as needed */}
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
	foodItem: {
		marginBottom: 20,
		padding: 10,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 5,
	},
});

export default ViewFoods;
