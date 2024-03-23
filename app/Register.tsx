import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FIREBASE_AUTH, FIREBASE_DB } from '../firebaseconfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Firestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


export default function RegisterUser() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName,setfName] = useState('');
  const [lName,setlName] = useState('');
  const [age,setage] = useState('');
  const [MobileNum,setMobileNum] = useState('');
  const[loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        router.push("/Login");
    }catch(error: any){
        console.log(error);
        alert('SignIn failed: ' + error.message);
    }
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, "users"), {
       fName,
       lName,
       MobileNum,
       email,
       age,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    finally{
        setLoading(false);
    }


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
              onPress={() => {router.push ("/Start")
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
            Sign Up
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{fontSize: 32,marginTop: 20,marginLeft: 20,}}>
          Welcome!
        </Text>
        <Text
          style={{fontSize: 16,marginLeft: 20,marginTop: -6,}}>
          Create your account
        </Text>
      </View>

      <View>
        <View
        style={styles.inputcontainer}
        >
          <Text>Frist Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" Your First Name"
            onChangeText={(fName) => setfName(fName)}
            >
          </TextInput>
        </View>

        <View
        style={styles.inputcontainer}
        >
          <Text>Last Name:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" Your Last Name"
            onChangeText={(lName) => setlName(lName)}
            >
          </TextInput>
        </View>
        <View
       style={styles.inputcontainer}
        >
          <Text>Age:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" Your Age"
            onChangeText={(age) => setage(age)}
            >
          </TextInput>
        </View>
        <View
       style={styles.inputcontainer}
        >
          <Text>Mobile number:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" +94XXXXXXXXX"
            onChangeText={(MobileNum) => setMobileNum(MobileNum)}
            >
          </TextInput>
        </View>
        <View
         style={styles.inputcontainer}
        >
          <Text>Email:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" Email"
            keyboardType="email-address"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View
          style={styles.inputcontainer}
        >
          <Text>Create password:</Text>
          <TextInput
            style={styles.textInput}
            placeholder=" Your password must be 8 charactors or more"
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
          marginHorizontal: 40,
          borderRadius: 10,
        }}
        onPress={signUp}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "400",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>
        Already have an account?
      </Text>

      <TouchableOpacity
        style={{
          height: 45,
          justifyContent: "center",
          alignItems: "center",
          marginTop: -15,
          marginHorizontal: 40,
          borderRadius: 10,
        }}
        onPress={() => router.push("/Login")}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#1164C4",
          }}
        >
          {"Log in"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  textInput:{
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    height: 40,

  },
  inputcontainer:{
    marginHorizontal: 20,
    marginTop: 10,
  }
});

}