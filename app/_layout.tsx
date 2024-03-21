import {
  NavigationContainer,
  TabActions,
  TabRouter,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth"; // Check if this is the correct import from firebase
import { FIREBASE_AUTH } from "../Firebaseconfig"; // Assuming FIREBASE_APP is initialized elsewhere
import AsyncStorage from "@react-native-async-storage/async-storage"; // Corrected im
// Make sure Tabs is imported from the correct location
import { Tabs, Stack } from "expo-router"; // Replace 'path-to-Tabs' with the actual path
import TabLayout from "./(tabs)/_layout";
import LogIn from "./LogIn";
import RegisterUser from "./RegisterUser";
import Start from "./Start";
import { View } from "@/components/Themed";

const InsideStack = createNativeStackNavigator();

//  function InsideLayout() {
//   return(
//     <InsideStack.Navigator>
//       <InsideStack.Screen name="Tabs" component={Tabs} />
//     </InsideStack.Navigator>
//   )
// }

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });

    // Unsubscribe from the auth state listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <View>
      {user ? (
        <Tabs>
            <Tabs.Screen name="TabLayout" />
        </Tabs>
      ) : (
        <Stack>
          <Stack.Screen name="Start" />
          <Stack.Screen name="RegisterUser" />
          <Stack.Screen name="LogIn" />
        </Stack>
      )}
    </View>
  );
}
