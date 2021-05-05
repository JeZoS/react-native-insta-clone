import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const PostsScreen = (porps) => {
  useEffect(() => {
    porps.navigation.setOptions({
      headerLeft: () => <Text>add</Text>,
      headerRight: () => <Text>Hello</Text>,
    });
  });

  return (
    <View>
      <Text>POST SCREEN</Text>
    </View>
  );
};

export const screenOptions = {
  headerTitleStyle: {
    alignSelf: "center",
    fontFamily: "insta",
    fontSize:30,
  },
  headerTitle: "Instagram",
};

export default PostsScreen;
