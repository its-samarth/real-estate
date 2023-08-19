import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={[styles.login, styles.loginLayout]}>
      <View style={styles.unsplashc5dlhukewfmWrapper}>
        <Image
          style={[styles.unsplashc5dlhukewfmIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/unsplashc5dlhukewfm.png")}
        />
      </View>
      <View style={styles.unsplashc5dlhukewfmWrapper} />
      <LinearGradient
        style={[styles.bg1, styles.bg1Position]}
        locations={[0, 1]}
        colors={["#111110", "rgba(45, 46, 50, 0)"]}
      >
        <LinearGradient
          style={[styles.bgChild, styles.bg1Position]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.1)"]}
        />
        <View style={styles.h1}>
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
            <View style={styles.iconvisibilityOff}>
              <View
                style={[styles.iconvisibilityOffChild, styles.childPosition]}
              />
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
          <Text style={[styles.forgotPassword, styles.rememberMeTypo]}>
            Forgot password?
          </Text>
          <View style={styles.radioButtonParent}>
            <View style={styles.radioButton}>
              <View style={[styles.radioButtonChild, styles.radioLayout]} />
              <View style={[styles.radioButtonItem, styles.radioLayout]} />
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
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <View style={styles.btnShadowBox}>
            <Image
              style={styles.vectorIcon2}
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  bg1Position: {
    backgroundColor: "transparent",
    left: 414,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    width: 414,
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
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  childPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_sm,
    color: Color.sthLightgrey,
    fontFamily: FontFamily.latoRegular,
    textAlign: "left",
    lineHeight: 21,
  },
  radioLayout: {
    borderRadius: Border.br_31xl,
    position: "absolute",
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
  unsplashc5dlhukewfmIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  unsplashc5dlhukewfmWrapper: {
    left: 0,
    top: 0,
    height: 896,
    width: 414,
    position: "absolute",
  },
  bgChild: {
    top: 897,
    height: 896,
    borderRadius: Border.br_11xl,
    backgroundColor: "transparent",
    left: 414,
  },
  login1: {
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  h1: {
    top: 744,
    left: 247,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  email: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  formChild: {
    height: "65.48%",
    top: "34.52%",
    backgroundColor: Color.primaryGrey2,
    borderRadius: Border.br_7xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  emailAddress: {
    width: "77.38%",
    top: "51.19%",
    left: "5.95%",
    color: Color.sthLightgrey,
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
  iconvisibilityOffChild: {
    backgroundColor: Color.silver,
    position: "absolute",
  },
  vectorIcon: {
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
    backgroundColor: Color.sthLightgrey,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  radioButtonItem: {
    height: "78.95%",
    width: "44.12%",
    top: "10.53%",
    right: "50%",
    bottom: "10.53%",
    left: "5.88%",
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    borderRadius: Border.br_31xl,
  },
  radioButton: {
    width: 43,
    height: 24,
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
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    position: "absolute",
  },
  bg1: {
    top: 896,
    height: 471,
  },
  dontHaveAn: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.primaryGrey2,
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
    color: Color.primaryGrey2,
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
    backgroundColor: Color.sthDarkgrey,
    flex: 1,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
  },
  vectorIcon1: {
    width: 16,
    height: 20,
  },
  btnShadowBox: {
    marginLeft: 10,
    backgroundColor: Color.sthDarkgrey,
    flex: 1,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
  },
  vectorIcon2: {
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
    top: 194,
    left: 842,
    backgroundColor: Color.sthDark,
    shadowColor: "rgba(65, 81, 104, 0.8)",
    shadowRadius: 45,
    elevation: 45,
    overflow: "hidden",
    width: 414,
    height: 896,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
});

export default Login;
