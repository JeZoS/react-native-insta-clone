import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteThisPost,
  getSingle,
} from "../store/actions/posts";

const SinglePost = (props) => {
  const id = props.route.params.id;

  const { single: post } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingle(id));
  }, [dispatch]);

  const deletePost = () => {
    dispatch(deleteThisPost(id));
    props.navigation.goBack();
  };

  if (post === null) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={50} color="green" />
      </View>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.screen}
    >
      <View style={styles.head}>
        <View style={styles.profileImage}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `${post.profilePic}`,
              }}
            />
          </View>
          <Text>{post.userName}</Text>
        </View>
        <Ionicons
          name="trash"
          size={23}
          onPress={deletePost}
        />
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          imageStyle={{
            resizeMode: "contain",
          }}
          source={{
            uri: `${post.postImage}`,
          }}
        ></ImageBackground>
      </View>
      <View style={styles.options}>
        <View style={styles.optionsLeft}>
          <Ionicons
            style={styles.icons}
            name="heart"
            color="red"
            size={27}
          />
          <Ionicons
            style={styles.icons}
            name="chatbox-outline"
            size={27}
          />
          <Ionicons
            style={styles.icons}
            name="arrow-redo-outline"
            size={27}
          />
        </View>
        <View>
          <Ionicons
            style={styles.icons}
            name="bookmark-outline"
            size={27}
          />
        </View>
      </View>
      <View style={styles.below}>
        <View style={styles.padding}>
          <Text>{post.likes.length} likes</Text>
        </View>
        <View style={styles.padding}>
          <Text>
            <Text style={{ fontWeight: "bold" }}>
              {post.userName}
            </Text>{" "}
            {post.caption}
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={{ color: "gray" }}>
            view all {post.comment.length} Comments
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SinglePost;

const styles = StyleSheet.create({
  padding: {
    marginVertical: 2,
  },
  imageContainer: {
    width: "100%",
    height: Math.min(Dimensions.get("window").width, 600),
    maxWidth: 600,
    backgroundColor: "green",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 600,
  },
  screen: {
    alignItems: "center",
    flex: 1,
    marginBottom: 20,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 600,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 600,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  optionsLeft: {
    flexDirection: "row",
  },
  below: {
    paddingHorizontal: 5,
    width: "100%",
    maxWidth: 600,
  },
  icons: {
    padding: 5,
  },
  profileImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageContainer: {
    height: 30,
    width: 30,
    borderRadius: 150,
    overflow: "hidden",
    marginRight: 5,
  },
});
