import { ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const TabTwoScreen: React.FC = () => {
  return (
    
    <SafeAreaView style={styles.container}>
        
      <ScrollView>
        <View>
          <View style={{
            flexDirection: 'row',
            marginTop: 10,
            backgroundColor: "#EEF0FA",
            
          }}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  marginLeft: 30,
                  marginTop: 5,
                  backgroundColor: "#EEF0FA",
                  
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
                  backgroundColor: "#EEF0FA",
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
                backgroundColor: "#EEF0FA",
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

          <TouchableOpacity
            style={styles.promotions}
            onPress={() => console.log("Promotion open")}
          >
            <Image
              style={{ width: 280, height: 280, marginLeft: 20, borderRadius: 13 }}
              source={require("@/assets/images/offer.png")}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 19,
              fontWeight: "bold",
              marginTop: 30,
              marginLeft: 30,
            }}
          >
            Event calendar
          </Text>

          <View style={styles.eventcalendar}>
            <View>
              <Text>Today</Text>

              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  height: 130,
                  width: 310,
                  backgroundColor: "white",
                }}
                onPress={() => console.log("Event1 open")}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    justifyContent: "center",
                    marginRight: 5,
                  }}
                >
                  <Image
                    style={{
                      flex: 1,
                      marginTop: 5,
                      marginBottom: 5,
                      borderRadius: 10,
                      marginLeft: 10,
                    }}
                    source={require("@/assets/images/event01.png")}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Event Title
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Event Description
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Event Date
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginTop: 10,
                  flex: 1,
                  flexDirection: "row",
                  height: 130,
                  width: 310,
                  
                  backgroundColor: "white",
                }}
                onPress={() => console.log("Event2 open")}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    justifyContent: "center",
                    marginRight: 5,
                  }}
                >
                  <Image
                    style={{
                      flex: 1,
                      marginTop: 5,
                      marginBottom: 5,
                      borderRadius: 10,
                      marginLeft: 10,
                    }}
                    source={require("@/assets/images/sa 1.png")}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Event Title
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Event Description
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Event Date
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginTop: 10,
                  flex: 1,
                  flexDirection: "row",
                  height: 130,
                  width: 310,
                  
                  backgroundColor: "white",
                }}
                onPress={() => console.log("Event3 open")}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    justifyContent: "center",
                    marginRight: 5,
                  }}
                >
                  <Image
                    style={{
                      flex: 1,
                      marginTop: 5,
                      marginBottom: 5,
                      borderRadius: 10,
                      marginLeft: 10,
                      
                    }}
                    source={require("@/assets/images/sa 1.png")}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Event Title
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Event Description
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    Event Date
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

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
  box: {
    width: 358,
    height: 200,
    backgroundColor: '#2E77E5',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: 2, 
    borderRadius: 25,
    bottom: -100,
  },
  locationBox: {
    width: 278,
    height: 45,
    backgroundColor: 'white',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: 150, 
    borderRadius: 25,
    bottom: -100,
  },
  iconBox: {
    width: 180,
    height: 45,
    backgroundColor: 'white',
    marginTop: -80, // Adjust this value as needed
    alignSelf: 'center', // Centers the box horizontally
    marginLeft: -350, 
    borderRadius: 25,
    bottom: -135,
  },
  promotionsText:{
    fontSize: 18,
    marginLeft: 30,
    marginTop: -5,
    bottom: -155,
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
    backgroundColor: "#EEF0FA",
  },
  eventcalendar: {
    backgroundColor: "#EEF0FA",
  },
  
});
