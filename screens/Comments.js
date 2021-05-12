import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../store/actions/posts";

const Comments = (props) => {
  const post = props.route.params.post;

  const email = useSelector((state) => state.auth.email);
  var comments = post.comment;
  if (comments[0] === "1") {
    comments.shift();
  }
  comments.reverse();

  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const addCmnt = () => {
    if (comment.length <= 0) {
      return;
    }
    dispatch(addComment(post.id, email, comment, comments));
    props.navigation.goBack();
  };

  useEffect(() => {}, [dispatch]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            margin: 5,
          }}
        >
          <TextInput
            value={comment}
            onChangeText={(text) => setComment(text)}
            style={{
              padding: 10,
              margin: 10,
              borderBottomWidth: 2,
            }}
          />
        </View>
        <Ionicons
          size={23}
          name="md-send"
          onPress={addCmnt}
        />
      </View>
      <FlatList
        data={comments}
        renderItem={(itemData) => (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 15,
              paddingVertical: 5,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              {itemData.item.by} :{" "}
            </Text>
            <Text>{itemData.item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({});
