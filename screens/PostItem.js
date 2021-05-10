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

const PostItem = ({ post }) => {
  const [like, setLike] = useState(false);
  const [show, setShow] = useState(false);
  var lastTap = null;

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      setLike((prev) => !prev);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
      // console.log(like);
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
            style={styles.icons}
            name="md-heart-outline"
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
        <View>
          <Text>{post.likes.length} likes</Text>
        </View>
        <View>
          <Text>
            <Text style={{ fontWeight: "bold" }}>
              {post.userName}
            </Text>{" "}
            {post.caption}
          </Text>
        </View>
        <View>
          <Text style={{ color: "gray" }}>
            view all {post.comment.length} Comments
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
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
``;
