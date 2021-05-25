import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvlsRD8tqyXscdIqw2Lp7vV33FAqe0fQs",
    authDomain: "waste-segregation-app-3c422.firebaseapp.com",
    projectId: "waste-segregation-app-3c422",
    storageBucket: "waste-segregation-app-3c422.appspot.com",
    messagingSenderId: "287368447362",
    appId: "1:287368447362:web:273bab295a86c576cb3b9b",
    measurementId: "G-N9W8JXECHS"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();