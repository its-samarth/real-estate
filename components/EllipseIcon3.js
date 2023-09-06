import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const EllipseIcon3 = () => {
  return (
    <Image
      style={styles.loginsignupChild}
      contentFit="cover"
      source={require("../assets/ellipse-3917.png")}
    />
  );
};

const styles = StyleSheet.create({
  loginsignupChild: {
    position: "absolute",
    top: 1,
    left: 0,
    width: 1079,
    height: 1249,
  },
});

export default EllipseIcon3;
