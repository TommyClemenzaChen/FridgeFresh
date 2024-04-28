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
  button: {
    backgroundColor: '#231651',
    padding: 10,
    borderRadius: 5,
  },
  pickerButtons: {
    backgroundColor: 'gray',
    padding: 10,
    width: '60%',
    left: '20%',
  },
  buttonText: { 
    color: 'white',
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
    top: '122%',
    left: '46%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#4DCCBD',
    padding: 60,
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
    borderWidth: 2,
    borderColor: '#2374AB',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    color: 'black',
  },
});

export default styles;
