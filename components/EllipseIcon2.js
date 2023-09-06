import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const EllipseIcon2 = () => {
  return (
    <Image
      style={styles.loginsignupChild}
      contentFit="cover"
      source={require("../assets/ellipse-3918.png")}
    />
  );
};

const styles = StyleSheet.create({
  loginsignupChild: {
    position: "absolute",
    top: 0,
    left: 360,
    width: 1078,
    height: 589,
  },
});

export default EllipseIcon2;
