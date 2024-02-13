import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Image } from "react-native";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../../assets/images/maleAvatar.jpg")}
      />

      <View style={styles.subContainer}>
       
      <Text style={styles.username}>Danny Fernando</Text>
      </View>

      {/*
      <Text style={styles.age}>Age: 25</Text>
      <Text style={styles.gender}>Gender: Male</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: '100%',
    backgroundColor: "#AEAEAE",
  },
  username: {
    fontSize: 25,
    fontWeight: "bold",
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
    paddingTop: 10,
  },
});
