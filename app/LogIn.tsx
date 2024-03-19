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
// import { firebase } from "@react-native-firebase/auth";
// import React, { useState } from "react";

const LogIn = () => {

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const loginUser = async(email: string,password: string) =>{
//     try{
//       await firebase.auth().signInWithEmailAndPassword(email,password);
//     } catch(error:any){
//       alert(error.message)
//     }
//   }
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
            placeholder="Email"
            keyboardType="email-address"
            // onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
          />
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
            placeholder="Password"
            secureTextEntry={true}
            // onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            autoCorrect={false}
          />
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
        }}
        //  onPress={() => loginUser(email,password)}
         >
          <Text style={{
            color:'white',
            fontSize:18,
            fontWeight:'400'
          }}>LOG IN</Text>
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

export default LogIn;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
});
