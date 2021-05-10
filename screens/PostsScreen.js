import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import {
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import HeaderButtonComponent from "../Components/HeaderButton";
import PostItem from "./PostItem";

const PostsScreen = (props) => {
  const [change, setChange] = useState(false);
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

  const [nData, setNDate] = useState(null);

  const onClickAdd = () => {
    props.navigation.setOptions({setChange:setChange})
    props.navigation.navigate("upload",{setChange:setChange});
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

  const fetchData = async () => {
    const response = await fetch(
      "https://insta-clone-522aa-default-rtdb.firebaseio.com/posts.json"
    );
    const resData = await response.json();
    // console.log(resData);
    var newData = [];
    for (const key in resData) {
      newData.push({
        id: key,
        profilePic: resData[key].profilePic,
        caption: resData[key].caption,
        postImage: resData[key].postImage,
        likes: resData[key].likes,
        comment: resData[key].comment,
        userName: resData[key].userName,
      });
    }
    setNDate(newData);
  };

  useEffect(() => {
    fetchData();
  }, [change]);

  return (
    <View>
      <FlatList
        data={nData}
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
