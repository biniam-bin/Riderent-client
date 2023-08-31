// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

import firebase from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHVYhdReDaEJjHyjWjT3-7TuZfIvazmzA",
    authDomain: "riderent-543cb.firebaseapp.com",
    projectId: "riderent-543cb",
    storageBucket: "riderent-543cb.appspot.com",
    messagingSenderId: "396774915265",
    appId: "1:396774915265:web:e5bc4ee6786480d1952840",
    measurementId: "G-ZT9S4L9FJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
