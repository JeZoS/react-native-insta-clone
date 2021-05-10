import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Main, Auth } from "./navigation/Navigator";

import { useSelector } from "react-redux";

const App2 = () => {
  const auth = useSelector((state) => state.auth);
  const { token } = auth;
  return (
    <NavigationContainer>
      {token ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};

export default App2;
