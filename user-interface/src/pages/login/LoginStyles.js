import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: 'American Typewriter',
    marginBottom: 20,
    color: '#231651', // Title text color
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#4DCCBD', // Turquoise border
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000', // Black text color
  },
  button: {
    width: '100%',
    backgroundColor: '#2374AB', // Darker turquoise background
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    fontSize: 18,
  },
  link: {
    color: '#2374AB', // Darker turquoise color
    marginTop: 10,
  },
});

export default styles;

