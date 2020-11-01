import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwwa4Lm4bjz90kbTdVG7DC0TktfkQJGN8",
    authDomain: "clone-98ce8.firebaseapp.com",
    databaseURL: "https://clone-98ce8.firebaseio.com",
    projectId: "clone-98ce8",
    storageBucket: "clone-98ce8.appspot.com",
    messagingSenderId: "96491926528",
    appId: "1:96491926528:web:902cf6f52b3170eeb814e5",
    measurementId: "G-TQ9WJR0SD6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { db, auth };
