import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const Form = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.image}>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
          source={{ uri: `${props.image}` }}
        />
      </View>
      <View
        style={{
          width: "80%",
          margin: 10,
          borderBottomColor:"black",
          borderBottomWidth:2
        }}
      >
        <TextInput
          style={{ padding: 5 }}
          multiline={true}
          placeholder="Add a Description"
          onChangeText={(text) => props.setDescription(text)}
          value={props.description}
        />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "50%",
    maxWidth: 600,
    maxHeight: 600,
  },
});
