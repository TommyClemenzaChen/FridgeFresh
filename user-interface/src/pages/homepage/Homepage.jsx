// Homepage.jsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TextInput } from 'react-native';
import styles from './HomepageStyles'; // Import styles

const Homepage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemText, setItemText] = useState('');

  const handleAddItem = () => {
    setIsModalVisible(true);
  };

  const handleViewItems = () => {
    // Handle navigation to the screen for viewing all items in the fridge
  };

  const handleOpenCamera = () => {
    // Handle opening the camera
  };

  const handleSaveItem = () => {
    // Save the item and close the modal
    console.log('Item saved:', itemText);
    setIsModalVisible(false);
    setItemText('');
  };

  const handleCloseModal = () => {
    // Close the modal without saving
    setIsModalVisible(false);
    setItemText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>My Fridge App</Text>
        <Text style={styles.subtitle}>Welcome to your digital fridge!</Text>
        <Text style={styles.description}>
          Keep track of your food items, set reminders for expiration dates,
          and plan your meals efficiently.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Add Item" onPress={handleAddItem} />
          <Button title="View Items" onPress={handleViewItems} />
        </View>
      </View>
      <View style={styles.navbar}>
        <Button title="Camera" onPress={handleOpenCamera} />
      </View>

      {/* Modal for adding item */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Item</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter item name"
              onChangeText={text => setItemText(text)}
              value={itemText}
            />
            <View style={styles.modalButtonContainer}>
              <Button title="Save" onPress={handleSaveItem} />
              <Button title="Cancel" onPress={handleCloseModal} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Homepage;
