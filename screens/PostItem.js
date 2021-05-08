import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const PostItem = ({ post }) => {
  return (
    <View style={styles.screen}>
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
        <Image
          style={styles.image}
          source={{
            uri: `${post.postImage}`,
          }}
          resizeMode="cover"
        />
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
            <Text style={{fontWeight:'bold'}} >{post.userName}</Text> {post.caption}
          </Text>
        </View>
        <View>
          <Text>
            view all {post.comment.length} Comments
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    // height: "55%",
    maxWidth: 600,
    // backgroundColor: "green",
    maxHeight: 600,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    backgroundColor: "#111",
  },
  screen: {
    alignItems: "center",
    flex: 1,
    // backgroundColor: "gray",
    marginBottom: 3,
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
    // backgroundColor: "green",
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
