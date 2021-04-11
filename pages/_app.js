import '../styles/globals.css'
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseconfig";
import { useEffect } from "react";



if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
};


function MyApp({ Component, pageProps }) {

  useEffect (() => {
    const db = firebase.firestore()

      db.collection("homework").doc("bARR2Gh7JceJxcJxFofc")
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
    });
  })
  return <Component {...pageProps} />
}

export default MyApp
