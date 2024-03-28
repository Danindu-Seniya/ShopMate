import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { router } from "expo-router";

export default function UserSettingsScreen() {
 

  const handleLogout = () => {
    // Implement logic for logging out the user
    // For example, clearing authentication tokens, resetting state, etc.
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>router.push("../Settings/pwAndSecurity")}>
        <Text style={styles.buttonText}>Password and Security</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>router.push("../Settings/help")}>
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>router.push("../Settings/about")}>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={()=>router.push("/emergencyServ/reqMedical")}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#007bff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    padding: 20,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
