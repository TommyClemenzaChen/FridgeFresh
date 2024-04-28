// HomepageStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  newItemButton: {
    backgroundColor: '#231651',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveButton: {
    backgroundColor: 'white', // White background
    padding: 10,
    width: '60%',
    left: '20%',
    borderRadius: 25, // Rounded corners
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerButtons: {
    backgroundColor: '#4DCCBD',
    padding: 10,
    width: '60%',
    left: '20%',
    borderRadius: 25, // Rounded corners
    justifyContent: 'center',
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#231651', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25,
    shadowRadius: 4.00,
    elevation: 5,
    backgroundImage: 'linear-gradient(90deg, #FFD700 0%, #F0E68C 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  closeButton: {
    backgroundColor: 'aqua',
    padding: 10,
    width: '60%',
    left: '20%',
    borderRadius: 25, // Rounded corners
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { 
    color: '#2374AB',
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  dateSelectors: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the picker horizontally
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  // Styles for the modal
  datePicker: {
    position: 'absolute',
    top: '116%',
    left: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#4DCCBD',
    padding: 70,
    paddingTop: 60,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  modalTypedInputs: {
    width: "80%",
    left: "10%",
    height: 50,
    borderWidth: 2,
    borderColor: "#FFFFFF", // White border
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF", // White background
    color: "#000000", // Black text color
    fontSize: 18,
  },
});

export default styles;
