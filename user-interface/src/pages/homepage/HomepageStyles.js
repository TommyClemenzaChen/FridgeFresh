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
    color: '#16ADB9', // Turquoise cyan color
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#16ADB9', // Turquoise cyan color
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#16ADB9', // Turquoise cyan color
  },
  helpButtonContainer: {
    position: 'absolute',
    top: 50, // Adjust the top margin as needed
    right: 20, // Adjust the right margin as needed
  },
  helpButton: {
    backgroundColor: '#FFDD66', // Yellow background
    borderRadius: 25, // Rounded corners
    padding: 10, // Padding around the text
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center',
  },
  newItemButton: {
    backgroundColor: '#16ADB9', // Turquoise cyan background
    width: 75, // Adjust button width
    height: 75, // Adjust button height
    borderRadius: 50, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Center the button horizontally
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
    backgroundColor: '#FFDD66', // Yellow background
    padding: 10,
    width: '60%',
    left: '20%',
    borderRadius: 25, // Rounded corners
    justifyContent: 'center',
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#16ADB9', // Turquoise cyan shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25,
    shadowRadius: 4.00,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: '#16ADB9', // Turquoise cyan background
    padding: 10,
    width: '60%',
    left: '20%',
    borderRadius: 25, // Rounded corners
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { 
    color: 'white', // White text color
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 25,
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
    backgroundColor: '#FFFFFF', // White background
    paddingVertical: 30,
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
    backgroundColor: '#FFFFFF', // White background
    padding: 70,
    paddingTop: 60,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#16ADB9', // Turquoise cyan color
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
    color: "#16ADB9", // Turquoise cyan text color
    fontSize: 18,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20, // Adjust the bottom margin as needed
    flexDirection: 'row',
    justifyContent: 'center', // Center the buttons horizontally
    width: '100%',
  },
  cameraButton: {
    backgroundColor: '#FFDD66', // Yellow background
    width: 75, // Adjust button width
    height: 75, // Adjust button height
    borderRadius: 50, // Make it circular
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 200, // Add margin between buttons
  },
});

export default styles;
