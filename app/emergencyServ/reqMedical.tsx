import React from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import {MaterialIcons} from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";

export default function reqMedical() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasPermission, setHasPermission] = useState(null);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
     <MaterialIcons name="emergency-share" size={150} color="#727272" />
     <Text style={styles.title}>Share Your Location</Text>
     <Text style={styles.sentence}>
     Scan the closest shop front and connect with the service.
     </Text>

     <View style={styles.buttonWrapper}>

       <Text style={styles.buttonWrapperText}>
         Click camera to connect{" "}
       </Text>

       <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <MaterialIcons name="photo-camera" size={24} color="white" />
        </TouchableOpacity>
        </View>
       
     </View>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
   paddingTop: 10,
 },
 title: {
   fontSize: 35,
   fontWeight: "bold",
   paddingTop: 10,
 },
 sentence: {
   fontSize: 14,
 },
 separator: {
   marginVertical: 30,
   height: 1,
   width: "80%",
 },
 button: {
  alignItems: "center",
  justifyContent: "center",
  width: 60,
  height: 60,
  borderRadius: 30,
  elevation: 3,
  backgroundColor: "black",
 },
 buttonText: {
   fontSize: 16,
   lineHeight: 21,
   fontWeight: "bold",
   letterSpacing: 0.25,
   color: "white",
 },
 buttonWrapper: {
   alignItems: "center",
   justifyContent: "center",
   paddingTop: 150,
 },
 buttonWrapperText: {
   fontWeight: "bold",
   paddingVertical: 10,
 },
});
