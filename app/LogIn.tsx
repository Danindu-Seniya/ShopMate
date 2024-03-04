import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function LogIn() {
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
              onPress={() => {
                router.push("/home");
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
            Log In
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
          Welcome Back!
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginTop: -6,
          }}
        >
        Sign in to your account
        </Text>
      </View>

      <View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
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
          >
            {" "}
           xxx@gmail.com
          </TextInput>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text>Password:</Text>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: "black",
              borderRadius: 10,
              height: 40,
            }}
          >
            {" "}
            *********
          </TextInput>
        </View>
       
      </View>

      <TouchableOpacity style={{
        backgroundColor:'black',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        marginTop:300,
        marginHorizontal:40,
        borderRadius:10,
        }} onPress={() => router.push("/Authentication")}>
          <Text style={{
            color:'white',
            fontSize:18,
            fontWeight:'400'
          }}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        height:45,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-1,
        marginHorizontal:40,
        borderRadius:10,
        }} onPress={() => console.log('Foget Password')}>
          <Text style={{
            fontSize:16,
          }}>{'Foget Password'}</Text>
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
