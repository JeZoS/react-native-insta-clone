import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  // TouchableWithoutFeedback,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const PostItem = ({ post, navigation }) => {
  const [show, setShow] = useState(false);

  var lastTap = null;

  const email = useSelector((state) => state.auth.email);

  const sendLike = async () => {
    if (post.likes.indexOf(`${email}`) !== -1) {
      console.log(post.likes);
    } else {
      try {
        const response = await fetch(
          `https://insta-clone-522aa-default-rtdb.firebaseio.com/posts/${post.id}.json`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              likes: [...post.likes, email],
            }),
          }
        );
        const resData = await response.json();
        // console.log(resData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const commentHandler = () => {
    // console.log(post.id)
    navigation.navigate("comment", {
      post: post,
    });
  };

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      setShow(true);
      sendLike();
      setTimeout(() => {
        setShow(false);
      }, 1000);
    } else {
      lastTap = now;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleDoubleTap}
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
          name="ellipsis-vertical-outline"
          size={23}
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
        >
          {show && (
            <View>
              <Ionicons
                size={170}
                name="heart"
                color="red"
              />
            </View>
          )}
        </ImageBackground>
      </View>
      <View style={styles.options}>
        <View style={styles.optionsLeft}>
          <Ionicons
            onPress={sendLike}
            style={styles.icons}
            name={
              post.likes.indexOf(`${email}`) === -1
                ? "md-heart-outline"
                : "heart"
            }
            color={
              post.likes.indexOf(`${email}`) === -1
                ? "black"
                : "red"
            }
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
        <TouchableOpacity
          activeOpacity={1}
          onPress={commentHandler}
          style={styles.padding}
        >
          <Text style={{ color: "gray" }}>
            view all {post.comment.length} Comments
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

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
