import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { router } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function UserSettingsScreen() {
 

  const handleLogout = () => {
    // Implement logic for logging out the user
    // For example, clearing authentication tokens, resetting state, etc.
  };

  return (
    <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={()=>router.push("../Settings/pwAndSecurity")}>
        <View style={styles.buttonContent}>
          <MaterialIcons name="security" size={24} color="black" style={styles.icon} />
          <Text style={styles.buttonText}>Password and Security</Text>
        </View>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>router.push("../Settings/help")}>
        <View style={styles.buttonContent}>
          <Entypo name="help-with-circle" size={24} color="black" style={styles.icon} />
          <Text style={styles.buttonText}>Help</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>router.push("../Settings/about")}>
        <View style={styles.buttonContent}>
        <AntDesign name="exclamationcircle" size={24} color="black" style={styles.icon} />
          <Text style={styles.buttonText}>About</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={()=>router.push("../Settings/logOut")}>
        <View style={styles.buttonContent}>
        <AntDesign name="logout" size={24} color="black" style={styles.icon} />
          <Text style={styles.logoutButtonText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#5B95D7",
    borderRadius: 10,
    width: "80%", 
  },
  logoutContainer: {
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "red",
    borderRadius: 10,
    width: "80%", 
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    padding: 20,
    marginLeft: 10
  },
  logoutButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    padding: 20,
    marginLeft: 10
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
});
