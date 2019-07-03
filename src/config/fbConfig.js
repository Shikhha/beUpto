import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnG9mzQpY42ieYJxqkLPQwzX_NZRFYUUE",
  authDomain: "be-upto-1602b.firebaseapp.com",
  databaseURL: "https://be-upto-1602b.firebaseio.com",
  projectId: "be-upto-1602b",
  storageBucket: "",
  messagingSenderId: "1062160695506",
  appId: "1:1062160695506:web:7e38161cac9ed30f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
