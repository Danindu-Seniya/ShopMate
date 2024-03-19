import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SignIn() {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color="black"
              top={10}
              left={3}
              onPress={() => {router.push ("/home")
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1.5,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              alignItems: "flex-start",
            }}
          >
            Sign Up
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 32,
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginTop: -6,
          }}
        >
          Create your account
        </Text>
      </View>

      <View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text>Name:</Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 10,
              height: 40,
            }}
          >
            {" "}
            Ex:mark
          </TextInput>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text>Birthday:</Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 10,
              height: 40,
            }}
          >
            {" "}
            dd/mm/yyyy
          </TextInput>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text>Mobile number:</Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 10,
              height: 40,
            }}
          >
            {" "}
            +94 xxx xxx
          </TextInput>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text>Email:</Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 10,
              height: 40,
            }}
            placeholder="Email"
            keyboardType="email-address"
            // onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text>Create password:</Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 10,
              height: 40,
            }}
            placeholder="Your password must be 8 charactors or more"
            secureTextEntry
            // onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
          marginHorizontal: 40,
          borderRadius: 10,
        }}
        // onPress={handleRegister}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "400",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>
        Already have an account?
      </Text>

      <TouchableOpacity
        style={{
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -15,
          marginHorizontal: 40,
          borderRadius: 10,
        }}
        onPress={() => router.push("/LogIn")}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#1164C4",
          }}
        >
          {"Log in"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
