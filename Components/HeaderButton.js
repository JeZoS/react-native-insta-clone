import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const HeaderButtonComponent = (prop) => {
  return (
    <HeaderButton
      {...prop}
      IconComponent={Ionicons}
      iconSize={23}
      // color="red"
    />
  );
};

export default HeaderButtonComponent;
