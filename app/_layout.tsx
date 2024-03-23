import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseconfig';
import TabLayout from './(tabs)/_layout';
import Start from './Start';



const Stack = createNativeStackNavigator();
// const InsideStack = createNativeStackNavigator();
// function InsideLayout() {
//   return(
//     <InsideStack.Navigator>
//       <InsideStack.Screen name="List" component={List} />
//       <InsideStack.Screen name="Details" component={Details} />
//     </InsideStack.Navigator>
//   )
// }

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    })
  }, []);

  return (
      <Stack.Navigator initialRouteName="TabLayout">
        {user ? (
          <Stack.Screen name="TabLayout" component={TabLayout} options={{ headerShown: false }}/>
        ) : (
          <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
        )}
      </Stack.Navigator>
  );
}

