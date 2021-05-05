import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen, {
  screenOptions,
} from "../screens/PostsScreen";
import { Platform } from "react-native";

const defaultNavOptions = {
//   headerTintColor:
    // Platform.OS === "android" ? "white" : Colors.primary,
};

const PostStack = createStackNavigator();

export const PostsNavigator = () => {
  return (
    <PostStack.Navigator screenOptions={defaultNavOptions}>
      <PostStack.Screen
        name="posts"
        component={PostsScreen}
        options={screenOptions}
      />
    </PostStack.Navigator>
  );
};
