import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import firebase from "firebase/app";
import { LogBox } from "react-native";
import _ from "lodash";
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import authReducer from "./store/reducers/auth";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import App2 from "./App2";

LogBox.ignoreLogs([
  "Setting a timer",
  "Non-serializable values were found in the navigation state",
]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

var firebaseConfig = {
  apiKey: "AIzaSyDa99ieQMejmFX82VYlL4N2b1zrrDgcSaY",
  authDomain: "insta-clone-522aa.firebaseapp.com",
  databaseURL:
    "https://insta-clone-522aa-default-rtdb.firebaseio.com",
  projectId: "insta-clone-522aa",
  storageBucket: "insta-clone-522aa.appspot.com",
  messagingSenderId: "873476956032",
  appId: "1:873476956032:android:4b141d5694ddc04258ab65",
};

try {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
} catch (error) {
  console.log(error);
}

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);

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
    <Provider store={store}>
      <App2 />
    </Provider>
  );
}
