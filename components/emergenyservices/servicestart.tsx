import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons, SimpleLineIcons, Entypo } from "@expo/vector-icons";

const Servicestart = () => {
  return (
    <SafeAreaView
      style={{
        marginTop: 10,
      }}
    >
      {/**Heder back arrow and settings icon */}
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }}>
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="black"
            top={20}
            left={3}
            onPress={() => {
              console.log("Back");
            }}
          />
        </View>

        <View>
          <SimpleLineIcons
            name="settings"
            size={24}
            color="black"
            top={20}
            left={-2}
            onPress={() => {
              console.log("settings");
            }}
          />
        </View>
      </View>

      {/**center part */}
      <View>
        <View style={{
            marginTop: 100,
            marginHorizontal: 100
        }}>
          <Entypo
            name="location"
            size={150}
            color="black"
          />
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {"Locate your\n destination"}
          </Text>
          <Text style={{
            fontSize: 15,
            textAlign: "center",
            marginHorizontal:40,
            marginTop: 10
          }}>
            {'Locate your destination easily and connect with the services.'}
          </Text>
        </View>
      </View>
      {/**camera part */}
          <View style={{
            marginTop:150,
            marginHorizontal: 100,
            alignItems: "center",
          }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Click camera to locate
            </Text>
            <Entypo
            name="camera" 
            size={50}
            color="black"
            onPress={() => {
              console.log("Camera open");
            }}
            />


          </View>
    </SafeAreaView>
  );
};

export default Servicestart;
