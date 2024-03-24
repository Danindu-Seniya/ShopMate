// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ4zoPZNe71Axbf0bbzJRDxTzxA2qywnw",
    authDomain: "shopmate-c6134.firebaseapp.com",
    databaseURL:"https://shopmate-c6134-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shopmate-c6134",
    storageBucket: "shopmate-c6134.appspot.com",
    messagingSenderId: "989937013535",
    appId: "1:989937013535:web:36ce9e3cf84b4d908a962a",
    measurementId: "G-GWQ5K1Z1QB"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);