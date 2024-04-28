import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Camera } from "expo-camera";


export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  // useEffect(() => {
  //     (async () => {
  //       const cameraStatus = await Camera.requestPermissionsAsync();
  //       setHasCameraPermission(cameraStatus.status === 'granted');
  // })();
  //   }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data);
    }
  };

  const saveImage = async () => {
    console.log("Saving Image");
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          ratio={"1:1"}
        />
      </View>
      {image && <Image source={{ uri: image.uri }} style={{ flex: 1 }} />}

      <Button
        style={styles.pictureButton}
        title="Take Picture"
        onPress={() => takePicture()}
      />
      {image && (
        <Button
          style={styles.saveImageButton}
          title="Save Picture"
          onPress={saveImage}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
  },
  saveImageButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    margin: 40,
    width: 100,
    alignSelf: "center",
  },
  pictureButton: {
    color: "green",
    borderRadius: 5,
    padding: 10,

    alignSelf: "center",
  },
});