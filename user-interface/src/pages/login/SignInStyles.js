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
     borderColor: "#ccc",
     borderRadius: 5,
     marginBottom: 10,
     paddingHorizontal: 10,
   },
});

export default styles;