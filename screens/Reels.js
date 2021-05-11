import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Reels = () => {
  return (
    <View style={styles.screen} >
      <Text>Reels</Text>
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
