import React, { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import HeaderButtonComponent from "../Components/HeaderButton";
import { logout } from "../store/actions/auth";

const Profile = (props) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const userPosts = useSelector(
    (state) => state.posts.userPosts
  );

  const width = Math.min(
    Dimensions.get("window").width,
    600
  );

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
      headerTitle: `${email}`,
    });
  }, []);

  const pressHandler = (id) => {
    props.navigation.navigate("single", { id: id });
  };

  return (
    <View>
      <View>
        <View style={styles.headContainer}>
          <View
            style={{
              padding: 10,
              overflow: "hidden",
            }}
          >
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
              }}
            />
          </View>
          <View style={styles.stats}>
            <View style={styles.center}>
              <Text>{userPosts.length}</Text>
              <Text>Posts</Text>
            </View>
            <View style={styles.center}>
              <Text>10</Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.center}>
              <Text>20</Text>
              <Text>Followings</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 20,
          }}
        >
          <Text>UsertName</Text>
          <Text>About</Text>
          <Text>Hobbies</Text>
          <Text>Location</Text>
        </View>
        <View>
          <FlatList
            data={userPosts}
            numColumns={3}
            renderItem={(itemData) => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() =>
                  pressHandler(itemData.item.id)
                }
                style={{
                  width: width / 3,
                  height: width / 3,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                    backgroundColor: "#111",
                  }}
                  source={{
                    uri: `${itemData.item.postImage}`,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  headContainer: {
    flexDirection: "row",
  },
  image: {
    width:
      Math.min(Dimensions.get("window").width, 600) / 4,
    height:
      Math.min(Dimensions.get("window").width, 600) / 4,
    resizeMode: "cover",
    borderRadius: 100,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
