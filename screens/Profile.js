import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import HeaderButtonComponent from "../Components/HeaderButton";
import { logout } from "../store/actions/auth";

const Profile = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons
          HeaderButtonComponent={HeaderButtonComponent}
        >
          <Item
            title="Logout"
            iconName="log-out-outline"
            onPress={() => {
              dispatch(logout());
            }}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
