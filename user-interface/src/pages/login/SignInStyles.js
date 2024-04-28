import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4DCCBD', // Light turquoise background
    borderRadius: 30,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'PlayfairDisplay_800ExtraBold_Italic',
    marginBottom: 20,
    color: '#FFFFFF', // White text color
    // Apply gradient background to text
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(90deg, #FFD700 0%, #F0E68C 100%)', // Bright gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderColor: '#FFFFFF', // White border
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF', // White background
    color: '#000000', // Black text color
    fontSize: 18,
  },
  signInContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
},
  button: {
    width: "60%",
    height: 60,
    backgroundColor: '#FFD700', // Bright yellow button
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: 'black',
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 15,
  },
  link: {
    color: '#FFFFFF', // White text color
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 100,
    fontFamily: 'Verdana',
  },
});

export default styles;
