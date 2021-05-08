import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Main,
  PostsNavigator,
  Tabs,
} from "./navigation/Navigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDa99ieQMejmFX82VYlL4N2b1zrrDgcSaY ",
  authDomain: "insta-clone-522aa.firebaseapp.com",
  databaseURL:
    "https://insta-clone-522aa-default-rtdb.firebaseio.com",
  projectId: "insta-clone-522aa",
  storageBucket: "insta-clone-522aa.appspot.com",
  messagingSenderId: "873476956032",
  appId: "1:873476956032:android:4b141d5694ddc04258ab65",
  // measurementId: "G-MEASUREMENT_ID",
};

// console.log(firebase.apps);

try {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
} catch (error) {
  console.log(error);
}

// console.log(firebase.apps);

// firebase.initializeApp(firebaseConfig)
// var database = firebase.database();
// console.log(res)

const fetchFont = () => {
  return Font.loadAsync({
    insta: require("./assets/fonts/insta.ttf"),
  });
};

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          setLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
