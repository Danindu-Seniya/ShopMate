import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const PublicEmergency = () => {
  return (
    <ScrollView>
      {/**Heder and back Arrow */}
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
        }}
      >
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
        <Text
          style={{
            marginTop: 20,
            marginHorizontal: 50,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Public Emergency services
        </Text>
      </View>
      {/**services */}
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
            Police Emergency Hot-line
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
              118/119
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
          Ambulance / Fire & rescue	
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
              110
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
          Accident Service-General Hospital-Colombo
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
            011-2691111
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
          Tourist Police
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
            011-2421052
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
          Police Emergency	
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
            011-2433333
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
          Government Information Center	
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
            1919
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
          Report Crimes	
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
            011-2691500
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
          Emergency Police Mobile Squad
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
            011-5717171
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
          Fire & Ambulance Service
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
            011-2422222
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.butten}
          onPress={() => console.log("Access to dial pad")}>
          <Text style={styles.text}>
          Child & Women Bureau
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="call-outline" size={20} left={20} top={3} />
            <Text style={styles.number}>
            0112444444
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    butten: {
        height: 55,
        width: "95%",
        backgroundColor: "#F0EBEB",
        borderRadius: 10,
        marginTop:8
    },
    text:{
        marginTop: 5,
        marginLeft: 20,
         fontSize: 17
    },
    number:{
        color: "blue", 
        marginLeft: 25, 
        fontSize: 20
    }

})

export default PublicEmergency;
