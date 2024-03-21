import { useState } from "react";
import { StyleSheet, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import { Image } from "react-native";
import ReviewCard from "@/components/ReviewCard";

export default function TabThreeScreen() {

  const [isReviews, setIsReviews] = useState<boolean>(true);

  const img1 = require("../../assets/images/ice-cream.png")
  const img2 = require("../../assets/images/Kickspot.jpeg")

  return (
    //  Main cotainer
    
    <ScrollView style={{ flex: 1}} contentContainerStyle={{ alignItems: "center", justifyContent: "flex-end",  }}>
      {/* Sub container */}
      <View style={{ flex: 0.75, paddingTop: 130, borderTopEndRadius: 20, borderTopStartRadius: 20, width: '100%', backgroundColor: "#AEAEAE" }}>
        <Image
          style={{ width: 200, height: 200, marginStart: 100, borderRadius: 100, marginTop: -100, zIndex: 20 }}
          source={require("../../assets/images/maleAvatar.jpg")}   
        />

        {/* Top Icons set */}
        <View style={{ flex: 0.1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, marginTop: -90, zIndex: 10, backgroundColor: "transparent" }}>
          <Image
            style={{ width: 45, height: 45 }}
            source={require("../../assets/images/storeIcon.svg")}
          />
          <Image
            style={{ width: 45, height: 45 }}
            source={require("../../assets/images/emergency-bell.png")}
          />
        </View>

        {/* Text */}
        <View style={{ marginTop: 100, flexDirection: "column", gap: 10, paddingHorizontal: 20, backgroundColor: "transparent", width: "70%" }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "left", }}>Gehan Fernando</Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "transparent" }}>
            <Text style={{ fontSize: 20 }}>Age:</Text>
            <Text style={{ fontSize: 20 }}>25</Text>
          </View>
        </View>

        {/* button set */}

        <View style={{ marginTop: 40, flexDirection: "row", backgroundColor: "transparent", width: "90%", alignSelf: "center" }}>
          <Pressable
            onPress={()=>setIsReviews(true)}
            style={[styles.button, isReviews ? styles.selectedButton : null]}
          >
            <Text style={[styles.buttonText, isReviews ? styles.selectedButtonText : null]}>Reviews</Text>
          </Pressable>

          <Pressable
            onPress={()=>setIsReviews(false)}
            style={[styles.button, !isReviews ? styles.selectedButton : null]}
          >
            <Text style={[styles.buttonText, !isReviews ? styles.selectedButtonText : null]}>Bio</Text>
          </Pressable>
        </View>

        {/* Reviews View */}
        {isReviews ?
          (<ScrollView style={{ flex: 1, flexDirection: "column", rowGap: 25, marginTop: 20, paddingVertical: 30, }}>

            <ReviewCard props={{ name: "Chillz", text: "Very Tasty and Good customer Service with great offers.", date: "Today", img: img1 }} />

            <ReviewCard props={{ name: "KickSpot", text: "High quality shoes and they have great offers. Highly recommended.", date: "14/01/2024", img: img2 }} />


          </ScrollView>)
          :
          (<View style={{backgroundColor:"rgba(251, 251, 251, 0.30)", width:"90%", alignSelf:"center", paddingHorizontal:20,paddingVertical:30, rowGap:10, borderRadius:10, marginTop:40}}>
            <View style={{ flexDirection: "row", backgroundColor: 'transparent', }}>
              <Text style={{ flex: 1, fontSize: 18, color: "black", fontWeight: "300" }}>Name</Text>
              <Text style={{ flex: 0.8, fontSize: 18, color: "black", fontWeight: "300" }}>: Gehan</Text>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: 'transparent', }}>
              <Text style={{ flex: 1, fontSize: 18, color: "black", fontWeight: "300" }}>Age</Text>
              <Text style={{ flex: 0.8, fontSize: 18, color: "black", fontWeight: "300" }}>: 31</Text>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: 'transparent', }}>
              <Text style={{ flex: 1, fontSize: 18, color: "black", fontWeight: "300" }}>Gender</Text>
              <Text style={{ flex: 0.8, fontSize: 18, color: "black", fontWeight: "300" }}>: Male</Text>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: 'transparent', }}>
              <Text style={{ flex: 1, fontSize: 18, color: "black", fontWeight: "300" }}>Health conditions</Text>
              <Text style={{ flex: 0.8, fontSize: 18, color: "black", fontWeight: "300" }}>: Asthma</Text>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: 'transparent', }}>
              <Text style={{ flex: 1, fontSize: 18, color: "black", fontWeight: "300" }}>Medicine</Text>
              <Text style={{ flex: 0.8, fontSize: 18, color: "black", fontWeight: "300" }}>: Theophylline</Text>
            </View>

            <Pressable
    style={styles.editButton}
    onPress={() => handleEditBio()}
  >
    <Text style={styles.editButtonText}>Edit Bio</Text>
  </Pressable>

          </View>)
        }




      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({


  age: {
    fontSize: 20,
  },
  gender: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "#fff",
    width: '35%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5, // Added margin for spacing between buttons
  },
  selectedButton: {
    backgroundColor: "#000",
  },
  buttonText: {
    fontSize: 15,
  },
  selectedButtonText: {
    color: "#fff",
  },
  editButton: {
    backgroundColor: "#252525", 
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 125,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 50,
    marginTop: 10, 
  },
  editButtonText: {
    fontSize: 18,
    color: "#fff", 
  },
});
