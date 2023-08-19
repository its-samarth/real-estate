import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const EllipseIcon = () => {
  return (
    <Image
      style={styles.loginsignupChild}
      contentFit="cover"
      source={require("../assets/ellipse-3919.png")}
    />
  );
};

const styles = StyleSheet.create({
  loginsignupChild: {
    position: "absolute",
    top: 346,
    left: 1006,
    width: 1077,
    height: 904,
  },
});

export default EllipseIcon;
