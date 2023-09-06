import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.wwwinstagramcomuxuiUniversWrapper}>
      <Text style={styles.wwwinstagramcomuxuiUnivers}>
        www.instagram.com/uxui_universe
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wwwinstagramcomuxuiUnivers: {
    fontSize: FontSize.size_2xl,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    color: Color.white,
    textAlign: "left",
  },
  wwwinstagramcomuxuiUniversWrapper: {
    position: "absolute",
    top: 1171,
    left: 861,
    flexDirection: "row",
  },
});

export default FrameComponent;
