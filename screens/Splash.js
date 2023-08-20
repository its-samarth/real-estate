import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <View style={styles.unsplashc5dlhukewfmWrapper}>
        <Image
          style={[styles.unsplashc5dlhukewfmIcon, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/unsplashc5dlhukewfm.png")}
        />
      </View>
      <View style={styles.unsplashc5dlhukewfmWrapper}>
        <LinearGradient
          style={[styles.bgChild, styles.bg1Bg]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.1)"]}
        />
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/group-3889.png")}
          />
          <Text style={styles.redBricksRealContainer}>
            <Text style={styles.red}>
              <Text style={styles.red1}>{`Red `}</Text>
            </Text>
            <Text style={styles.bricksRealEstate}>
              <Text style={styles.red}>{`Bricks
`}</Text>
              <Text style={styles.realEstate}>REAL ESTATE</Text>
            </Text>
          </Text>
        </View>
      </View>
      <LinearGradient
        style={[styles.bg1, styles.bg1Bg]}
        locations={[0, 1]}
        colors={["#111110", "rgba(45, 46, 50, 0)"]}
      />
      <View style={styles.rectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  bg1Bg: {
    backgroundColor: "transparent",
    width: 414,
    position: "absolute",
  },
  unsplashc5dlhukewfmIcon: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    width: "100%",
    maxWidth: "100%",
    left: "0%",
    top: "0%",
  },
  unsplashc5dlhukewfmWrapper: {
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  bgChild: {
    left: 0,
    top: 0,
    backgroundColor: "transparent",
    height: 896,
    borderRadius: Border.br_11xl,
  },
  groupChild: {
    height: "89.19%",
    width: "22.79%",
    right: "77.21%",
    bottom: "10.81%",
  },
  red1: {
    color: Color.mediumseagreen_100,
  },
  red: {
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  realEstate: {
    fontSize: 20,
    letterSpacing: 10,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  bricksRealEstate: {
    color: Color.materialThemeGrey6,
  },
  redBricksRealContainer: {
    top: 2,
    left: 86,
    lineHeight: 32,
    textAlign: "left",
    position: "absolute",
  },
  groupParent: {
    height: "8.26%",
    width: "76.33%",
    top: "45.76%",
    right: "11.84%",
    bottom: "45.98%",
    left: "11.84%",
    position: "absolute",
  },
  bg1: {
    top: 896,
    left: 414,
    height: 471,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  rectangle: {
    bottom: 7,
    left: 139,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.mediumseagreen_100,
    width: 135,
    height: 5,
    position: "absolute",
  },
  splash: {
    backgroundColor: Color.sthDark,
    shadowColor: "rgba(65, 81, 104, 0.8)",
    shadowOffset: {
      width: 20,
      height: 40,
    },
    shadowRadius: 45,
    elevation: 45,
    shadowOpacity: 1,
    flex: 1,
    overflow: "hidden",
    height: 896,
    borderRadius: Border.br_11xl,
    width: "100%",
  },
});

export default Splash;
