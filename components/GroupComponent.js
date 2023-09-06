import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.listingParent}>
      <View style={[styles.listing, styles.listingShadowBox]} />
      <View style={[styles.listing1, styles.listingShadowBox]} />
      <View style={styles.listing2} />
    </View>
  );
};

const styles = StyleSheet.create({
  listingShadowBox: {
    height: 664,
    width: 306,
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(56, 49, 4, 0.07)",
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  listing: {
    top: 0,
    left: 0,
  },
  listing1: {
    top: 14,
    left: 657,
  },
  listing2: {
    top: 55,
    left: 328,
    width: 307,
    height: 665,
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(56, 49, 4, 0.07)",
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  listingParent: {
    top: 140,
    left: 144,
    width: 963,
    height: 720,
    position: "absolute",
  },
});

export default GroupComponent;
