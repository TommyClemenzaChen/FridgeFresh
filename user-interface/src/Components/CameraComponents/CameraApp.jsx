import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Camera } from "expo-camera";
import axios from "axios";
import * as FS from "expo-file-system";

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
    console.log("Saving image...");
  
    while (image === null) {
      await new Promise((resolve) => setTimeout(resolve, 1)); // Wait for 1 second (adjust as needed)
      console.log("Waiting for image to be taken...");
    }
    try {
      const apiUrl = "http://localhost:5000/predict";

      console.log(image);
      const api = axios.create({
        baseURL: 'http://127.0.0.1:5000'
      });
      const response = await api.post('/predict', {image: image.uri})

      // let response = await FS.uploadAsync(apiUrl, image.uri, {
      //   headers: {
      //     "content-type": "",
      //   },
      //   httpMethod: "POST",
      //   uploadType: FS.FileSystemUploadType.BINARY_CONTENT,
      // });
      // // axios 

      // let response = await axios.post(apiUrl, {
      //   image: image.uri,
      // });

      console.log("Upload success:", response.data);
    } catch (error) {
      console.log("Error uploading image");
      console.log(error);
      console.log(image);
    }
  };

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
