import { ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from "@/Firebaseconfig";

export default function TabTwoScreen() {
  const [fName, setFName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const Snapshot = await getDocs(collection(FIREBASE_DB, "users"));
        Snapshot.forEach((doc) => {
          setFName(doc.data().first); // Set fName from Firestore data
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <View>
              <Image
                style={{
                  height: 50,
                  width: 50,
                  marginLeft: 30,
                }}
                source={require("@/assets/images/Profile_photo.png")}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginTop: 5,
                }}
              >
                Hello {fName} !
              </Text>
            </View>
            <TouchableOpacity onPress={() => console.log("Emergency open")}>
              <Image
                style={{ marginLeft: 100 }}
                source={require("@/assets/images/emergency.png")}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 17,
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
              style={{ width: 300, height: 300 }}
              source={require("@/assets/images/offer.png")}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 17,
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
                  borderRadius: 20,
                  borderWidth: 2,
                  backgroundColor: "black",
                }}
                onPress={() => console.log("Event1 open")}
              >
                <View
                  style={{
                    backgroundColor: "black",
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
                    backgroundColor: "black",
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Event Title
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Event Description
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
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
                  borderRadius: 20,
                  borderWidth: 2,
                  backgroundColor: "black",
                }}
                onPress={() => console.log("Event2 open")}
              >
                <View
                  style={{
                    backgroundColor: "black",
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
                    backgroundColor: "black",
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Event Title
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Event Description
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
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
                  borderRadius: 20,
                  borderWidth: 2,
                  backgroundColor: "black",
                }}
                onPress={() => console.log("Event3 open")}
              >
                <View
                  style={{
                    backgroundColor: "black",
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
                    backgroundColor: "black",
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Event Title
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Event Description
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
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

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  promotions: {
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 30,
  },
  eventcalendar: {
    marginHorizontal: 30,
    marginTop: 20,
  },
});
