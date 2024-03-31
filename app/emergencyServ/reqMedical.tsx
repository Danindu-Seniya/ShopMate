import React, { useRef, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera } from 'expo-camera';

export default function reqMedical() {
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status === 'granted') {
        // Permission granted, initialize the camera
        // Here, we are accessing the back camera
        await cameraRef.current?.initializeAsync({ type: Camera.Constants.Type.back });
      } else {
        // Permission denied, display an error message or handle it accordingly
        console.log('Camera permission not granted');
      }
    })();
  }, []);

  const handleCameraPress = async () => {
    // Take a photo or perform any other action with the camera
    // For simplicity, let's just log a message for now
    console.log('Take a photo or perform any other action with the camera');
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={cameraRef}
      />

      <TouchableOpacity style={styles.button} onPress={handleCameraPress}>
        <MaterialIcons name="photo-camera" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: '#EEF0FA'
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#2E77E5",
  },
});
