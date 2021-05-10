import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { login, signup } from "../store/actions/auth";

const AuthScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSignup, setLogin] = useState(true);

  const dispatch = useDispatch();
  const onPressHandler = () => {
    try {
      if (loginSignup) {
        dispatch(login(email, password));
      } else {
        dispatch(signup(email, password));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.instaContainer}>
        <Text style={styles.insta}>Instagram</Text>
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.inputcontainer}>
        <Button
          title={loginSignup ? "Login" : "Signup"}
          onPress={onPressHandler}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
        }}
      >
        <Text>
          {loginSignup
            ? "Create Account ."
            : "Already have an account ."}
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setLogin(!loginSignup)}
        >
          <Text style={{ color: "blue" }}>
            {loginSignup ? " Register" : " Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  insta: {
    fontFamily: "insta",
    fontSize: 80,
    marginBottom: 50,
  },
  inputcontainer: {
    width: "70%",
    maxWidth: 500,
  },
  input: {
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
