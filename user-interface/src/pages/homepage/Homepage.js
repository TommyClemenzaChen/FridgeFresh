import React, { useState } from 'react';
import { Button, View, TextInput, Modal } from 'react-native';
import { collection, addDoc, doc, serverTimestamp, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Homepage = () => {
  // Firebase setup
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser; // Get the currently signed-in user

  // State for food details
  const [food, setFood] = useState({
    name: '',
    expire_time_fridge: '',
    expire_time_freezer: '',
    calories: '',
    imageUri: '',
  });
  // State for controlling the visibility of the modal
  const [modalVisible, setModalVisible] = useState(false);

  // Handle form input changes
  const handleInputChange = (name, value) => {
    setFood({ ...food, [name]: value });
  };

  // Handle the submission of the food form
  const handleSubmit = async () => {
    if (!user) {
      console.error('No user is signed in.');
      return;
    }

    try {
      // Reference to the 'foods' subcollection in the user's document
      const foodsColRef = collection(db, 'users', user.uid, 'foods');

      await addDoc(foodsColRef, {
        ...food,
        expire_time_fridge: serverTimestamp(),
        expire_time_freezer: serverTimestamp(),
        calories: parseInt(food.calories, 10),
      });

      console.log('Food item added to the user\'s collection!');
      setModalVisible(false); // Close the modal upon success
    } catch (error) {
      console.error('Error adding food item to the user\'s collection:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Button to trigger the modal */}
      <Button title='Add New Food Item' onPress={() => setModalVisible(true)} />
      
      {/* Modal for adding a new food item */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={{ marginTop: 50, padding: 20, backgroundColor: 'white' }}>
          <TextInput
            placeholder='Food Name'
            value={food.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
          <TextInput
            placeholder='Expiration Date (Fridge)'
            value={food.expire_time_fridge}
            onChangeText={(text) => handleInputChange('expire_time_fridge', text)}
          />
          <TextInput
            placeholder='Expiration Date (Freezer)'
            value={food.expire_time_freezer}
            onChangeText={(text) => handleInputChange('expire_time_freezer', text)}
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
          <Button title='Submit Food Item' onPress={handleSubmit} />
          <Button title='Close' onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default Homepage;
