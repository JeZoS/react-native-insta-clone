import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { PostsNavigator } from "./navigation/Navigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

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
      <PostsNavigator />
    </NavigationContainer>
  );
}
