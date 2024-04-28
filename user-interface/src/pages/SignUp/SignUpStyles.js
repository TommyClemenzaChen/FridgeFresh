import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
      alignItems: "center",
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
      //darker yellow color
      color: "#FFD700",
    },
    input: {
      width: "100%",
      height: 40,
      borderWidth: 1,
      borderColor: "gray",
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
    },
    fridgeTitle: {
      color: "#4DCCBD",
      fontSize: 30,
      fontFamily: "PlayfairDisplay_800ExtraBold_Italic",
    },
    freshTitle: {
        color: "#2374AB",
        fontSize: 30,
        fontFamily: "PlayfairDisplay_800ExtraBold_Italic",
    },
    welcome: {
        color: "black",
        fontSize: 30,
        fontFamily: "PlayfairDisplay_800ExtraBold_Italic",
    },
});

export default styles;
