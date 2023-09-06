import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const EllipseIcon1 = () => {
  return (
    <Image
      style={styles.loginsignupChild}
      contentFit="cover"
      source={require("../assets/ellipse-3920.png")}
    />
  );
};

const styles = StyleSheet.create({
  loginsignupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 821,
    height: 759,
  },
});

export default EllipseIcon1;
