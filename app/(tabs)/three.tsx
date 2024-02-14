import { useState } from "react";
import { StyleSheet, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import { Image } from "react-native";

export default function TabThreeScreen() {

  const [isReviews, setIsReviews] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.profileImage}
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
            source={require("../../assets/images/bellIcon.svg")}
          />
        </View>

        {/* Text */}
        <View style={{ marginTop: 60, flexDirection: "column", gap: 10, paddingHorizontal: 20, backgroundColor: "transparent", width: "70%" }}>
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "left"
            ,
          }}>Gehan Fernando</Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "transparent" }}>
            <Text style={{ fontSize: 20 }}>Age:</Text>
            <Text style={{ fontSize: 20 }}>25</Text>
          </View>
        </View>

        {/* button set */}

        <View style={{ marginTop: 40, flexDirection: "row", backgroundColor: "transparent", width: "90%", alignSelf: "center", }}>
          <Pressable style={{ backgroundColor: "#fff", width: '35%', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, flex: 0.75, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20 }}>Reviews</Text>
          </Pressable>

          <Pressable style={{ backgroundColor: "#000", width: '35%', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, flex: 0.75, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Bio</Text>
          </Pressable>
        </View>

        {/* Reviews View */}
        if(isReviews){
          <ScrollView style={{flex:1, flexDirection:"column", rowGap:10}}>

            <View>
              
            </View>


        </ScrollView>
        }else{
          <View>

          </View>
        }




      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  subContainer: {
    flex: 0.75,
    paddingTop: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    width: '100%',
    backgroundColor: "#AEAEAE",

  },


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
  profileImage: {
    width: 200,
    height: 200,
    marginStart: 100,
    borderRadius: 100,
    marginTop: -100,
    zIndex: 20
  },
});
