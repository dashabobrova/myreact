import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGe11ugOxFmSJfVmd3OCykuiNw_Sd1OdY",
    authDomain: "chat-4c31a.firebaseapp.com",
    databaseURL: "https://chat-4c31a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-4c31a",
    storageBucket: "chat-4c31a.appspot.com",
    messagingSenderId: "125770852039",
    appId: "1:125770852039:web:3282b5c0c7bedc3d6d80e2",  
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();