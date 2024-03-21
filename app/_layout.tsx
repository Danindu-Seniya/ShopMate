import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseconfig';
import TabLayout from './(tabs)/_layout';
import Start from './Start';
import LogIn from './Login';
import RegisterUser from './Register';
import TabOneScreen from './(tabs)';
import TabTwoScreen from './(tabs)/two';
import TabThreeScreen from './(tabs)/three';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name="index" component={TabOneScreen} />
      <InsideStack.Screen name="tow" component={TabTwoScreen} />
      <InsideStack.Screen name="three" component={TabThreeScreen} />

    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    })
  }, []);

  return (
      <Stack.Navigator initialRouteName="Start">
        {user ? (
          <Stack.Screen name="InsideStack" component={InsideLayout}  options={{ headerShown: false }}/>
        ) : (
          <><>
          <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }} /></>
            <Stack.Screen name="Register" component={RegisterUser} options={{ headerShown: false }} /></>
        )}
      </Stack.Navigator>
  );
}

