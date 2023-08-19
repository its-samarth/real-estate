import * as React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import EllipseIcon3 from "../components/EllipseIcon3";
import Signup from "../components/Signup";
import EllipseIcon2 from "../components/EllipseIcon2";
import EllipseIcon from "../components/EllipseIcon";
import EllipseIcon1 from "../components/EllipseIcon1";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import Login from "../components/Login";
import Splash from "../components/Splash";

const LoginSignup = () => {
  return (
    <LinearGradient
      style={styles.loginsignup}
      locations={[0, 1]}
      colors={["#6a8199", "#64788e"]}
    >
      <EllipseIcon3 />
      <Signup />
      <EllipseIcon2 />
      <EllipseIcon />
      <EllipseIcon1 />
      <FrameComponent />
      <GroupComponent />
      <Login />
      <Splash />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginsignup: {
    flex: 1,
    width: "100%",
    height: 1250,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default LoginSignup;
