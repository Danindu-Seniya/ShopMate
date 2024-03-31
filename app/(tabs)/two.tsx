import { ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";
import Events from "../Events";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Promo from "../Promo";


export default function TabTwoScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
        
      <ScrollView>
        <View>
          <View style={{
            // flexDirection: 'row',
            marginTop: 10,
          }}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  marginLeft: 30,
                  marginTop: 5,
                  
                }}
              >
                Hello {'Jane'}!
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  bottom: -30,
                  marginLeft: -112,
                  marginTop: 5,
                  color:'black'
                  
                }}
              >
                What you looking for?
              </Text>
            </View>
            <View>
              <Image style={{
                height: 50,
                width: 50,
                marginLeft: 100,
                bottom: -6,
                
              }}
                source={require("@/assets/images/Profile_photo.png")} />
            </View>
            
            {/* <TouchableOpacity onPress={() => console.log("Emergency open")} >
              <Image style={{ marginLeft: 100 }}
                source={require("@/assets/images/emergency.png")}
              />
            </TouchableOpacity> */}

            
          </View>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              marginLeft: 30,
              marginTop: 20,
            }}
          >
            Promotions
          </Text>


            {/* promotion  */}
          <TouchableOpacity
            style={styles.promotions}
            onPress={() => console.log("Promotion open")}
          >
            <Promo />
          </TouchableOpacity>

          {/* <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              marginTop: 30,
              marginLeft: 30,
            }}
          >
            Event calendar
          </Text> */}

          <View style={styles.eventcalendar}>
          <View style={{ flexDirection: "row" }}>
          <Text style={styles.calendarText}>Event Calendar</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Link href="../CreateEvents">
              <Icon name="add-circle" size={30} color="#FFFFFF" />
            </Link>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Events />
        </ScrollView>
          </View>
        </View>
      </ScrollView>



    
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7F4', // Changed background color
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: -60,
    color:'white'
  },
  text1: {
    fontSize: 18,
    marginLeft: 40,
    marginTop: -5,
    color:'white'
  },
  text2: {
    fontSize: 11,
    marginLeft: 140,
    marginTop: -5,
    bottom: -100,
    color:'#2E77E5'
  },
  text3: {
    fontSize: 16,
    marginLeft: 140,
    marginTop: -5,
    bottom: -105,
    color:'black',
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1 ,
    width: '80%',
    
  },
  promotions: {
    justifyContent: "center",
  },
  eventcalendar: {
  },
  calendarText: {
    fontSize: 18,
    marginLeft: 30,
    bottom: -65,
    color:'black',
    fontWeight: 'bold',
  },
  eventBox1: {
    width: 280,
    height: 130,
    backgroundColor: 'white',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: 2, 
    borderRadius: 25,
    bottom: -220,
  },
  eventBox2: {
    width: 280,
    height: 130,
    backgroundColor: 'white',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: 2, 
    borderRadius: 25,
    bottom: -120,
  },
  date: {
    fontSize: 16,
    marginLeft: 140,
    marginTop: -5,
    bottom: -145,
    color:'black',
    fontWeight: 'bold',
  },
});

export default TabTwoScreen;