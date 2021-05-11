import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen, {
  screenOptions,
} from "../screens/PostsScreen";
// import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/SearchScreen";
import Reels from "../screens/Reels";
import Like from "../screens/Like";
import Profile from "../screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import UploadImageScreen from "../screens/UploadImageScreen";
import AuthScreen from "../screens/AuthScreen";
import SinglePost from "../screens/SinglePost";

const PostStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ReelStack = createStackNavigator();
const LikeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export const PostsNavigator = () => {
  return (
    <PostStack.Navigator>
      <PostStack.Screen
        name="posts"
        component={PostsScreen}
        options={screenOptions}
      />
    </PostStack.Navigator>
  );
};

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="searchStack"
        component={SearchScreen}
      />
    </SearchStack.Navigator>
  );
};

const ReelNavigator = () => {
  return (
    <ReelStack.Navigator>
      <ReelStack.Screen
        name="reelStack"
        component={Reels}
      />
    </ReelStack.Navigator>
  );
};
const LikeNavigator = () => {
  return (
    <LikeStack.Navigator>
      <LikeStack.Screen name="likeStack" component={Like} />
    </LikeStack.Navigator>
  );
};
const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profileStack"
        component={Profile}
      />
      <ProfileStack.Screen
        name="single"
        component={SinglePost}
      />
    </ProfileStack.Navigator>
  );
};

const TabsNavigator = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <TabsNavigator.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "home":
              iconName = "md-home";
              break;
            case "search":
              iconName = "md-search";
              break;
            case "reels":
              iconName = "videocam-outline";
              break;
            case "likes":
              iconName = "md-heart-outline";
              break;
            case "profile":
              iconName = "person-circle-outline";
              break;
            default:
              break;
          }
          return (
            <Ionicons
              color={focused ? "red" : "black"}
              name={iconName}
              size={focused ? 28 : 23}
            />
          );
        },
        // tabBarVisible:route.name !== 'home' ? false : true
      })}
    >
      <TabsNavigator.Screen
        name="home"
        component={PostsNavigator}
      />
      <TabsNavigator.Screen
        name="search"
        component={SearchNavigator}
      />
      <TabsNavigator.Screen
        name="reels"
        component={ReelNavigator}
      />
      <TabsNavigator.Screen
        name="likes"
        component={LikeNavigator}
      />
      <TabsNavigator.Screen
        name="profile"
        component={ProfileNavigator}
      />
    </TabsNavigator.Navigator>
  );
};

const MainNavigator = createStackNavigator();

export const Main = () => {
  return (
    <MainNavigator.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name === "HOME" ? false : true,
      })}
    >
      <MainNavigator.Screen name="HOME" component={Tabs} />
      <MainNavigator.Screen
        name="upload"
        component={UploadImageScreen}
      />
      {/* <MainNavigator.Screen/> */}
    </MainNavigator.Navigator>
  );
};

const AuthNavigator = createStackNavigator();

export const Auth = () => {
  return (
    <AuthNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthNavigator.Screen
        name="auth"
        component={AuthScreen}
      />
    </AuthNavigator.Navigator>
  );
};
