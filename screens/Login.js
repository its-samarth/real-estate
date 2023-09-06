import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Switch, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Login = () => {
  const [rectangleSwitchSwitchValueState, setRectangleSwitchSwitchValueState] =
    useState(true);

  return (
    <View style={[styles.login, styles.loginLayout]}>
      <Image
        style={styles.loginChild}
        contentFit="cover"
        source={require("../assets/unsplashc5dlhukewfm.png")}
      />
      <View style={styles.loginChild} />
      <LinearGradient
        style={[styles.bg1, styles.h1Transform]}
        locations={[0, 1]}
        colors={["#111110", "rgba(45, 46, 50, 0)"]}
      >
        <Switch
          style={[styles.bgChild, styles.h1Transform]}
          value={rectangleSwitchSwitchValueState}
          onValueChange={setRectangleSwitchSwitchValueState}
        />
        <View style={[styles.h1, styles.h1Transform]}>
          <Text style={styles.login1}>Login</Text>
        </View>
        <View style={styles.formParent}>
          <View style={[styles.form, styles.formLayout]}>
            <Text style={[styles.email, styles.emailTypo]}>Email</Text>
            <View style={styles.formChild} />
            <Text style={styles.emailAddress}>Email Address</Text>
          </View>
          <View style={[styles.form1, styles.formLayout]}>
            <Text style={[styles.email, styles.emailTypo]}>Password</Text>
            <View style={styles.formChild} />
            <Text style={styles.emailAddress}>Password</Text>
            <Image
              style={styles.iconvisibilityOff}
              contentFit="cover"
              source={require("../assets/iconvisibility-off.png")}
            />
          </View>
          <Text style={[styles.forgotPassword, styles.rememberMeTypo]}>
            Forgot password?
          </Text>
          <View style={styles.radioButtonParent}>
            <View style={styles.radioButton}>
              <View style={styles.radioButtonChild} />
            </View>
            <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
              Remember me
            </Text>
          </View>
        </View>
        <View style={[styles.btn, styles.btnFlexBox]}>
          <Text style={[styles.login2, styles.emailTypo]}>Login</Text>
        </View>
      </LinearGradient>
      <Text style={styles.dontHaveAnContainer}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        <Text style={styles.signup}>Signup</Text>
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.btnFlexBox}>
          <View style={styles.frameBorder} />
          <Text style={styles.orLoginWith}>Or login with</Text>
          <View style={[styles.frameItem, styles.frameBorder]} />
        </View>
        <View style={styles.btnParent}>
          <View style={styles.btn1}>
            <Image
              style={styles.grommetIconsgoogle}
              contentFit="cover"
              source={require("../assets/grommeticonsgoogle.png")}
            />
          </View>
          <View style={styles.btnShadowBox}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <View style={styles.btnShadowBox}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.rectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 896,
    borderRadius: Border.br_11xl,
  },
  h1Transform: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  formLayout: {
    height: 84,
    width: 336,
    left: 0,
    position: "absolute",
  },
  emailTypo: {
    textAlign: "left",
    color: Color.materialThemeGrey6,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_sm,
    color: Color.materialThemeStaticSthLightgrey,
    fontFamily: FontFamily.latoRegular,
    textAlign: "left",
    lineHeight: 21,
  },
  btnFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 336,
    flexDirection: "row",
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#a09f99",
    borderStyle: "solid",
    flex: 1,
  },
  loginChild: {
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  bgChild: {
    top: 897,
    left: 414,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    width: 414,
    height: 896,
    borderRadius: Border.br_11xl,
  },
  login1: {
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.materialThemeGrey6,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  h1: {
    top: 744,
    left: 247,
    paddingHorizontal: 0,
    paddingVertical: 2,
    flexDirection: "row",
  },
  email: {
    top: "0%",
    lineHeight: 21,
    fontSize: FontSize.size_base,
    left: "0%",
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  formChild: {
    height: "65.48%",
    top: "34.52%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.materialThemeGrey2,
    borderRadius: Border.br_7xs,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  emailAddress: {
    width: "77.38%",
    top: "51.19%",
    left: "5.95%",
    color: Color.materialThemeStaticSthLightgrey,
    fontFamily: FontFamily.latoRegular,
    lineHeight: 26,
    letterSpacing: 0.2,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  form: {
    top: 0,
    height: 84,
  },
  iconvisibilityOff: {
    height: "28.57%",
    width: "7.16%",
    top: "52.38%",
    right: "5.97%",
    bottom: "19.05%",
    left: "86.87%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  form1: {
    top: 99,
  },
  forgotPassword: {
    left: 223,
    textDecoration: "underline",
    top: 198,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  radioButtonChild: {
    height: "78.95%",
    width: "44.12%",
    top: "10.53%",
    right: "50%",
    bottom: "10.53%",
    left: "5.88%",
    backgroundColor: Color.materialThemeGrey6,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 2,
    elevation: 2,
    borderRadius: Border.br_31xl,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
  },
  radioButton: {
    backgroundColor: Color.materialThemeStaticSthLightgrey,
    width: 43,
    height: 24,
    borderRadius: Border.br_31xl,
  },
  rememberMe: {
    marginLeft: 6,
  },
  radioButtonParent: {
    alignItems: "center",
    top: 198,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  formParent: {
    top: 647,
    height: 222,
    width: 336,
    left: 375,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  login2: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
  },
  btn: {
    top: 390,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    justifyContent: "center",
    backgroundColor: Color.mediumseagreen_100,
    borderRadius: Border.br_7xs,
    left: 375,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
  },
  bg1: {
    top: 896,
    height: 471,
    backgroundColor: "transparent",
    left: 414,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    width: 414,
  },
  dontHaveAn: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.materialThemeGrey2,
  },
  signup: {
    fontFamily: FontFamily.robotoBold,
    color: Color.mediumseagreen_100,
    fontWeight: "700",
  },
  dontHaveAnContainer: {
    top: 824,
    left: 96,
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  orLoginWith: {
    marginLeft: 16,
    color: Color.materialThemeGrey2,
    fontFamily: FontFamily.latoRegular,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  frameItem: {
    marginLeft: 16,
  },
  grommetIconsgoogle: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  btn1: {
    backgroundColor: Color.materialThemeStaticSthDarkgrey,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    alignItems: "center",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
  },
  vectorIcon: {
    width: 16,
    height: 20,
  },
  btnShadowBox: {
    marginLeft: 10,
    backgroundColor: Color.materialThemeStaticSthDarkgrey,
    justifyContent: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    alignItems: "center",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
  },
  vectorIcon1: {
    width: 10,
    height: 19,
  },
  btnParent: {
    width: 335,
    marginTop: 15,
    flexDirection: "row",
  },
  frameParent: {
    top: 595,
    left: 39,
    position: "absolute",
  },
  rectangle: {
    bottom: 7,
    left: 139,
    borderRadius: Border.br_81xl,
    width: 135,
    height: 5,
    backgroundColor: Color.mediumseagreen_100,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.sthDark,
    shadowColor: "rgba(65, 81, 104, 0.8)",
    shadowRadius: 45,
    elevation: 45,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    height: 896,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    borderRadius: Border.br_11xl,
  },
});

export default Login;
