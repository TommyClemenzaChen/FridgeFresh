// HelppageStyles.jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#4DCCBD', // Consistent with your app's theme
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#FFFFFF', // White text to stand out on the light turquoise background
		alignSelf: 'center',
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 10,
		color: '#FFFFFF', // White text for section titles
	},
	text: {
		fontSize: 18,
		color: '#FFFFFF', // White text for better readability
		marginBottom: 10,
	},
});

export default styles;
