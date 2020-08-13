import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDG6iRheU4yRHy-cJTCyVqnZEZSsuAGEyo",
    authDomain: "instagram-clone-react-e5274.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-e5274.firebaseio.com",
    projectId: "instagram-clone-react-e5274",
    storageBucket: "instagram-clone-react-e5274.appspot.com",
    messagingSenderId: "828896101263",
    appId: "1:828896101263:web:973c376a5a7ba0a62841fa",
    measurementId: "G-LJY73Y26G5"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };