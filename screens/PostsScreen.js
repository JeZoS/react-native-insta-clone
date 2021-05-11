import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import {
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import HeaderButtonComponent from "../Components/HeaderButton";
import { fetchPosts } from "../store/actions/posts";
import PostItem from "./PostItem";

const PostsScreen = (props) => {
  // const data = [
  //   {
  //     id: "1",
  //     profilePic:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OVNjuB3WZe4cjztwgxfoLTswodimdxKgbg&usqp=CAU",
  //     caption: "Dummy caption",
  //     postImage:
  //       "https://s18955.pcdn.co/wp-content/uploads/2020/02/Blog_InstaLikes_030320_WP-3.png",
  //     likes: ["1", "2"],
  //     comment: ["1", "2"],
  //     userName: "johnDoe",
  //   },
  // ];

  const onClickAdd = () => {
    props.navigation.navigate("upload");
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons
          HeaderButtonComponent={HeaderButtonComponent}
        >
          <Item
            title="Add"
            iconName="md-add"
            onPress={onClickAdd}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons
          HeaderButtonComponent={HeaderButtonComponent}
        >
          <Item
            title="Add"
            iconName="send-outline"
            onPress={() => {}}
          />
        </HeaderButtons>
      ),
    });
  });

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, posts]);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={(itemData) => (
          <PostItem post={itemData.item} />
        )}
      />
    </View>
  );
};

export const screenOptions = {
  headerTitleStyle: {
    alignSelf: "center",
    fontFamily: "insta",
    fontSize: 30,
  },
  headerTitle: "Instagram",
};

export default PostsScreen;
