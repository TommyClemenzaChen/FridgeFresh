import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        justifyContent: "center",
        height: height, // Ensure it fills the entire screen
        backgroundColor: '#4DCCBD', // Light turquoise background
        borderRadius: 30,
        padding: 20,
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        height: 100,
    },
    text: {
        color: "gray",
        marginVertical: 10,
    },
    link: {
        color: "#FFD700", // Darker yellow color
    },
    input: {
        width: "80%",
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
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    fridgeTitle: {
        color: "#FFFFFF", // White text color
        fontSize: 30,
        fontFamily: "PlayfairDisplay_800ExtraBold_Italic",
        // Apply gradient background to text
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(90deg, #FFD700 0%, #F0E68C 100%)", // Bright gradient
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    freshTitle: {
        color: "#FFFFFF", // White text color
        fontSize: 30,
        fontFamily: "PlayfairDisplay_800ExtraBold_Italic",
    },
    welcome: {
        color: "#FFFFFF", // White text color
        fontSize: 30,
        fontFamily: "PlayfairDisplay_800ExtraBold_Italic",
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFD700', // Bright yellow button
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF', // White text color
        fontSize: 20,
        fontFamily: 'Arial',
    },
});

export default styles;
