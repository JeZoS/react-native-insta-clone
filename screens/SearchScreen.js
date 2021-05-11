import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Search</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
