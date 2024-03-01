import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function CreateAccount() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            width: 200,
            paddingTop: 50,
          }}
        >
          <Text style={{
             fontSize: 64,
             fontWeight: "500",
             flexDirection: "column",
             textAlign: "right",
             color: "white",
          }}>Shop</Text>
        </View>
        
        <View
          style={{
            flex: 1,
            height: 200,
            width: 200,
            paddingTop: 50,
          }}
        >
          <Text style={{
             fontSize: 64,
             color: "black",
             fontWeight: "500",
             flexDirection: "column",
             textAlign: "left",
          }}>Mate</Text>
        </View>
      </View>
      
        <Image
          style={{
            width: 338,
            height: 326,
            marginTop: -25,
            marginHorizontal:10,
          }}
          source={require("../assets/home.png")}
        />
      
    
        <Text
          style={{
            justifyContent:'center',
            textAlign: "center",
            fontSize: 18,
            marginHorizontal:10,
            marginTop: 20,
            fontWeight:'bold',
          }}>
          "Shop. Explore. Enjoy."
        </Text>


      <TouchableOpacity style={{
        backgroundColor:'black',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        marginTop:90,
        marginHorizontal:40,
        borderRadius:10,
        }} onPress={() => console.log('Create account')}>
          <Text style={{
            color:'white',
            fontSize:18,
            fontWeight:'bold'
          }}>Create account</Text>
      </TouchableOpacity>

      <Text style={{textAlign:'center', marginTop:20, fontSize:16}}>
        Already have an account?
      </Text>

      <TouchableOpacity style={{
        height:45,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-15,
        marginHorizontal:40,
        borderRadius:10,
        }} onPress={() => console.log('Login')}>
          <Text style={{
            fontSize:18,
            color:'#1164C4',
          }}>{'Log in'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#BCBCBC',
    flex: 1,
  },
});
