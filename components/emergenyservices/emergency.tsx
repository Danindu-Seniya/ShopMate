import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function Emergency() {
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          marginTop: 10,
          width: "100%",
          height: "90%",
        }}
        source={require("../../assets/images/emergencybackground.png")}
      >
        <View>
          <Text
            style={{
              marginTop: "70%",
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Emergency Services
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Medical Service")}
          >
            <Text style={styles.text}>Medical Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Security Service")}
          >
            <Text style={styles.text}>Security Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Public Service")}
          >
            <Text style={styles.text}>Public Services</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 100,
              backgroundColor: "black",
              height: 50,
              width: "70%",
              justifyContent: "center",
              marginHorizontal: "15%",
              borderRadius: 10,
            }}
            onPress={() => console.log("continue")}
          >
            <Text style={styles.text}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "black",
    height: 45,
    width: "80%",
    justifyContent: "center",
    marginHorizontal: "10%",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
