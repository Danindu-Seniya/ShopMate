import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect,useState } from 'react';
import { useColorScheme } from '@/components/useColorScheme';
import LogIn from './LogIn';
import SignIn from './SignIn';
import CreateAccount from './home'
// //firebase config key setup
// import "@react-native-firebase/app";
// import { firebase } from "@react-native-firebase/auth";
// import "@react-native-firebase/auth";

// //web app firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBQ4zoPZNe71Axbf0bbzJRDxTzxA2qywnw",
//   authDomain: "shopmate-c6134.firebaseapp.com",
//   projectId: "shopmate-c6134",
//   storageBucket: "shopmate-c6134.appspot.com",
//   messagingSenderId: "989937013535",
//   appId: "1:989937013535:web:36ce9e3cf84b4d908a962a",
//   measurementId: "G-GWQ5K1Z1QB",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // //handle state change

  // function onAuthStateChanged() {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(()=>{
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // },[]);
  // if(initializing) return null;

  // if (!user) {
  //   return <CreateAccount/>
  // }
  return (
      <Stack>
        <Stack.Screen name="home" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="SignIn" options={{headerShown: false, presentation: 'modal'}}/>
        <Stack.Screen name="LogIn" options={{headerShown: false}}/>
        <Stack.Screen name="Authentication" options={{headerShown: false}}/>
      </Stack>
  );
}
