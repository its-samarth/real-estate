import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const Signup = () => {
  return (
    <View style={styles.signup}>
      <View
        style={[styles.unsplashc5dlhukewfmWrapper, styles.signupChildPosition]}
      >
        <Image
          style={[styles.unsplashc5dlhukewfmIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/unsplashc5dlhukewfm.png")}
        />
      </View>
      <View
        style={[styles.unsplashc5dlhukewfmWrapper, styles.signupChildPosition]}
      >
        <View style={styles.h1} />
      </View>
      <LinearGradient
        style={[styles.bg1, styles.bg1Bg]}
        locations={[0, 1]}
        colors={["#111110", "rgba(45, 46, 50, 0)"]}
      />
      <LinearGradient
        style={[styles.signupChild, styles.bg1Bg]}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.1)"]}
      />
      <Text style={[styles.alreadyHaveAnContainer, styles.userName1Layout]}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account! `}</Text>
        <Text style={styles.login}>Login</Text>
      </Text>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.lineParent}>
          <View style={styles.frameBorder} />
          <Text style={[styles.orSignupWith, styles.userName1Typo]}>
            Or signup with
          </Text>
          <View style={[styles.frameItem, styles.frameBorder]} />
        </View>
        <View style={styles.btnParent}>
          <View style={[styles.btn, styles.btnShadowBox1]}>
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
      <View style={[styles.formParent, styles.parentPosition]}>
        <View style={styles.formLayout}>
          <Text style={[styles.userName, styles.signupTypo]}>User Name</Text>
          <View style={styles.formChild} />
          <Text style={[styles.userName1, styles.userName1Typo]}>
            User name
          </Text>
        </View>
        <View style={[styles.form1, styles.formLayout]}>
          <Text style={[styles.userName, styles.signupTypo]}>Email</Text>
          <View style={styles.formChild} />
          <Text style={[styles.userName1, styles.userName1Typo]}>
            Email address
          </Text>
        </View>
        <View style={[styles.form1, styles.formLayout]}>
          <Text style={[styles.userName, styles.signupTypo]}>Password</Text>
          <View style={styles.formChild} />
          <Text style={[styles.userName1, styles.userName1Typo]}>Password</Text>
          <View style={styles.iconvisibilityOff}>
            <View
              style={[styles.iconvisibilityOffChild, styles.userNamePosition]}
            />
            <Image
              style={[styles.vectorIcon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
        </View>
        <View style={[styles.form1, styles.formLayout]}>
          <Text style={[styles.userName, styles.signupTypo]}>
            Confirm password
          </Text>
          <View style={styles.formChild} />
          <Text style={[styles.userName1, styles.userName1Typo]}>
            Confirm password
          </Text>
          <View style={styles.iconvisibilityOff}>
            <View
              style={[styles.iconvisibilityOffChild, styles.userNamePosition]}
            />
            <Image
              style={[styles.vectorIcon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
          <Text style={[styles.signup1, styles.signupTypo]}>Signup</Text>
        </View>
      </View>
      <View style={[styles.btn3, styles.btn3Bg]}>
        <Text style={[styles.signup2, styles.signupTypo]}>Signup</Text>
      </View>
      <View style={[styles.rectangle, styles.btn3Bg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  signupChildPosition: {
    left: 0,
    top: 0,
    height: 896,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  bg1Bg: {
    backgroundColor: "transparent",
    width: 414,
    position: "absolute",
  },
  userName1Layout: {
    lineHeight: 26,
    letterSpacing: 0.2,
    position: "absolute",
  },
  parentPosition: {
    left: 39,
    position: "absolute",
  },
  userName1Typo: {
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_base,
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#a09f99",
    borderStyle: "solid",
    flex: 1,
  },
  btnShadowBox1: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
  },
  signupTypo: {
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  formLayout: {
    height: 84,
    width: 336,
  },
  userNamePosition: {
    left: "0%",
    top: "0%",
    width: "100%",
  },
  btn3Bg: {
    backgroundColor: Color.mediumseagreen_100,
    position: "absolute",
  },
  unsplashc5dlhukewfmIcon: {
    left: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    height: "100%",
  },
  unsplashc5dlhukewfmWrapper: {
    width: 414,
    top: 0,
    position: "absolute",
  },
  h1: {
    top: 94,
    left: 153,
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
  signupChild: {
    left: 0,
    top: 0,
    height: 896,
    borderRadius: Border.br_11xl,
    backgroundColor: "transparent",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.primaryGrey2,
  },
  login: {
    fontFamily: FontFamily.robotoBold,
    color: Color.mediumseagreen_200,
    fontWeight: "700",
  },
  alreadyHaveAnContainer: {
    top: 824,
    left: 94,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  orSignupWith: {
    marginLeft: 16,
    lineHeight: 21,
    color: Color.primaryGrey2,
    textAlign: "center",
  },
  frameItem: {
    marginLeft: 16,
  },
  lineParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 336,
  },
  grommetIconsgoogle: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  btn: {
    backgroundColor: Color.sthDarkgrey,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    flex: 1,
  },
  vectorIcon: {
    width: 16,
    height: 20,
  },
  btnShadowBox: {
    marginLeft: 10,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    backgroundColor: Color.sthDarkgrey,
    borderRadius: Border.br_7xs,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
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
    top: 689,
  },
  userName: {
    textAlign: "left",
    lineHeight: 21,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    width: "100%",
    fontFamily: FontFamily.latoBold,
    position: "absolute",
  },
  formChild: {
    height: "65.48%",
    top: "34.52%",
    backgroundColor: Color.primaryGrey2,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  userName1: {
    width: "77.38%",
    top: "51.19%",
    left: "5.95%",
    color: Color.sthLightgrey,
    textAlign: "left",
    lineHeight: 26,
    letterSpacing: 0.2,
    position: "absolute",
  },
  form1: {
    marginTop: 15,
  },
  iconvisibilityOffChild: {
    backgroundColor: Color.silver,
    bottom: "0%",
    right: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "79.17%",
    width: "83.34%",
    top: "8.33%",
    right: "8.33%",
    bottom: "12.5%",
    left: "8.33%",
  },
  iconvisibilityOff: {
    height: "28.57%",
    width: "7.16%",
    top: "52.38%",
    right: "5.97%",
    bottom: "19.05%",
    left: "86.87%",
    position: "absolute",
  },
  signup1: {
    top: "-455.95%",
    left: "33.93%",
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    position: "absolute",
  },
  formParent: {
    top: 182,
  },
  signup2: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    textAlign: "left",
  },
  btn3: {
    top: 604,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    width: 336,
    backgroundColor: Color.mediumseagreen_100,
    left: 39,
  },
  rectangle: {
    bottom: 7,
    left: 139,
    borderRadius: Border.br_81xl,
    width: 135,
    height: 5,
  },
  signup: {
    top: 121,
    left: 1306,
    backgroundColor: Color.sthDark,
    shadowColor: "rgba(65, 81, 104, 0.8)",
    shadowRadius: 45,
    elevation: 45,
    overflow: "hidden",
    height: 896,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    width: 414,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
});

export default Signup;
