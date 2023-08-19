import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Padding, Border, Color } from "../GlobalStyles";

const LoginSignup = () => {
  return (
    <LinearGradient
      style={styles.loginsignup}
      locations={[0, 1]}
      colors={["#6a8199", "#64788e"]}
    >
      <Image
        style={styles.loginsignupChild}
        contentFit="cover"
        source={require("../assets/ellipse-3917.png")}
      />
      <View style={[styles.signup, styles.signupLayout]}>
        <View style={[styles.unsplashc5dlhukewfmWrapper, styles.signupLayout]}>
          <Image
            style={[styles.unsplashc5dlhukewfmIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/unsplashc5dlhukewfm.png")}
          />
        </View>
        <View style={[styles.unsplashc5dlhukewfmWrapper, styles.signupLayout]}>
          <View style={styles.h1} />
        </View>
        <LinearGradient
          style={[styles.bg1, styles.bg1Transform]}
          locations={[0, 1]}
          colors={["#111110", "rgba(45, 46, 50, 0)"]}
        />
        <LinearGradient
          style={[styles.signupChild, styles.signupLayout]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.1)"]}
        />
        <Text style={[styles.alreadyHaveAnContainer, styles.haveContainerTypo]}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already have an account! `}</Text>
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </Text>
        <View style={[styles.frameParent, styles.parentFramePosition]}>
          <View style={styles.lineParent}>
            <View style={styles.frameBorder} />
            <Text style={styles.orSignupWith}>Or signup with</Text>
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
        <View style={[styles.formParent, styles.parentFramePosition]}>
          <View style={styles.formLayout}>
            <Text style={[styles.userName, styles.signup2Typo]}>User Name</Text>
            <View style={[styles.formChild, styles.formChildPosition]} />
            <Text style={styles.userName1}>User name</Text>
          </View>
          <View style={[styles.form1, styles.formLayout]}>
            <Text style={[styles.userName, styles.signup2Typo]}>Email</Text>
            <View style={[styles.formChild, styles.formChildPosition]} />
            <Text style={styles.userName1}>Email address</Text>
          </View>
          <View style={[styles.form1, styles.formLayout]}>
            <Text style={[styles.userName, styles.signup2Typo]}>Password</Text>
            <View style={[styles.formChild, styles.formChildPosition]} />
            <Text style={styles.userName1}>Password</Text>
            <View style={styles.iconvisibilityOff}>
              <View
                style={[styles.iconvisibilityOffChild, styles.childPosition]}
              />
              <Image
                style={[styles.vectorIcon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
          <View style={[styles.form1, styles.formLayout]}>
            <Text style={[styles.userName, styles.signup2Typo]}>
              Confirm password
            </Text>
            <View style={[styles.formChild, styles.formChildPosition]} />
            <Text style={styles.userName1}>Confirm password</Text>
            <View style={styles.iconvisibilityOff}>
              <View
                style={[styles.iconvisibilityOffChild, styles.childPosition]}
              />
              <Image
                style={[styles.vectorIcon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
            <Text style={[styles.signup1, styles.login2Typo]}>Signup</Text>
          </View>
        </View>
        <View style={[styles.btn3, styles.btnShadowBox1]}>
          <Text style={[styles.signup2, styles.signup2Typo]}>Signup</Text>
        </View>
        <View style={styles.rectangle} />
      </View>
      <Image
        style={styles.loginsignupItem}
        contentFit="cover"
        source={require("../assets/ellipse-3918.png")}
      />
      <Image
        style={styles.loginsignupInner}
        contentFit="cover"
        source={require("../assets/ellipse-3919.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-3920.png")}
      />
      <View style={styles.wwwinstagramcomuxuiUniversWrapper}>
        <Text style={styles.wwwinstagramcomuxuiUnivers}>
          www.instagram.com/uxui_universe
        </Text>
      </View>
      <View style={styles.listingParent}>
        <View style={[styles.listing, styles.listingShadowBox]} />
        <View style={[styles.listing1, styles.listingShadowBox]} />
        <View style={styles.listing2} />
      </View>
      <View style={[styles.login1, styles.signupLayout]}>
        <View style={[styles.unsplashc5dlhukewfmWrapper, styles.signupLayout]}>
          <Image
            style={[styles.unsplashc5dlhukewfmIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/unsplashc5dlhukewfm.png")}
          />
        </View>
        <View
          style={[styles.unsplashc5dlhukewfmWrapper, styles.signupLayout]}
        />
        <LinearGradient
          style={[styles.bg3, styles.bg1Transform]}
          locations={[0, 1]}
          colors={["#111110", "rgba(45, 46, 50, 0)"]}
        >
          <LinearGradient
            style={[styles.bgChild, styles.bg1Transform]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.1)"]}
          />
          <View style={[styles.h11, styles.bg1Transform]}>
            <Text style={styles.login2Typo}>Login</Text>
          </View>
          <View style={[styles.formGroup, styles.btn4Position]}>
            <View style={[styles.form4, styles.formLayout]}>
              <Text style={[styles.userName, styles.signup2Typo]}>Email</Text>
              <View style={styles.formChildPosition} />
              <Text style={styles.userName1}>Email Address</Text>
            </View>
            <View style={[styles.form5, styles.formLayout]}>
              <Text style={[styles.userName, styles.signup2Typo]}>
                Password
              </Text>
              <View style={styles.formChildPosition} />
              <Text style={styles.userName1}>Password</Text>
              <View style={styles.iconvisibilityOff}>
                <View
                  style={[styles.iconvisibilityOffChild, styles.childPosition]}
                />
                <Image
                  style={[styles.vectorIcon2, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector2.png")}
                />
              </View>
            </View>
            <Text style={[styles.forgotPassword, styles.rememberMeTypo]}>
              Forgot password?
            </Text>
            <View
              style={[styles.radioButtonParent, styles.forgotPasswordPosition]}
            >
              <View style={styles.radioButton}>
                <View style={[styles.radioButtonChild, styles.radioLayout]} />
                <View style={[styles.radioButtonItem, styles.radioLayout]} />
              </View>
              <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
                Remember me
              </Text>
            </View>
          </View>
          <View style={[styles.btn4, styles.btn4Position]}>
            <Text style={[styles.signup2, styles.signup2Typo]}>Login</Text>
          </View>
        </LinearGradient>
        <Text style={[styles.dontHaveAnContainer, styles.haveContainerTypo]}>
          <Text style={styles.alreadyHaveAn}>{`Don’t have an account? `}</Text>
          <Text style={[styles.signup3, styles.loginTypo]}>Signup</Text>
        </Text>
        <View style={[styles.frameGroup, styles.parentFramePosition]}>
          <View style={styles.lineParent}>
            <View style={styles.frameBorder} />
            <Text style={styles.orSignupWith}>Or login with</Text>
            <View style={[styles.frameItem, styles.frameBorder]} />
          </View>
          <View style={styles.btnParent}>
            <View style={[styles.btn5, styles.btnShadowBox1]}>
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
      <View style={[styles.splash, styles.signupLayout]}>
        <View style={[styles.unsplashc5dlhukewfmWrapper, styles.signupLayout]}>
          <Image
            style={[styles.unsplashc5dlhukewfmIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/unsplashc5dlhukewfm.png")}
          />
        </View>
        <View style={[styles.unsplashc5dlhukewfmWrapper, styles.signupLayout]}>
          <LinearGradient
            style={[styles.signupChild, styles.signupLayout]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.1)"]}
          />
          <View style={styles.groupParent}>
            <Image
              style={[styles.groupChild, styles.iconLayout]}
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
          style={[styles.bg5, styles.bg1Transform]}
          locations={[0, 1]}
          colors={["#111110", "rgba(45, 46, 50, 0)"]}
        />
        <View style={styles.rectangle} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  signupLayout: {
    height: 896,
    width: 414,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bg1Transform: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  haveContainerTypo: {
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    top: 824,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  parentFramePosition: {
    left: 39,
    position: "absolute",
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    overflow: "hidden",
  },
  signup2Typo: {
    fontFamily: FontFamily.latoBold,
    textAlign: "left",
    color: Color.white,
    fontWeight: "700",
  },
  formChildPosition: {
    backgroundColor: Color.primaryGrey2,
    top: "34.52%",
    height: "65.48%",
    borderRadius: Border.br_7xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  formLayout: {
    height: 84,
    width: 336,
  },
  childPosition: {
    left: "0%",
    top: "0%",
  },
  login2Typo: {
    fontSize: FontSize.size_17xl,
    color: Color.white,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    textAlign: "center",
  },
  listingShadowBox: {
    height: 664,
    width: 306,
    elevation: 80,
    shadowRadius: 80,
    shadowColor: "rgba(56, 49, 4, 0.07)",
    borderRadius: Border.br_6xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    position: "absolute",
  },
  btn4Position: {
    left: 375,
    width: 336,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_sm,
    color: Color.sthLightgrey,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    lineHeight: 21,
  },
  forgotPasswordPosition: {
    top: 198,
    position: "absolute",
  },
  radioLayout: {
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  loginsignupChild: {
    top: 1,
    width: 1079,
    height: 1249,
    left: 0,
    position: "absolute",
  },
  unsplashc5dlhukewfmIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  unsplashc5dlhukewfmWrapper: {
    top: 0,
    left: 0,
  },
  h1: {
    top: 94,
    left: 153,
    position: "absolute",
  },
  bg1: {
    height: 471,
    top: 896,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    left: 414,
    width: 414,
    backgroundColor: "transparent",
  },
  signupChild: {
    top: 0,
    borderRadius: Border.br_11xl,
    width: 414,
    left: 0,
    backgroundColor: "transparent",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.primaryGrey2,
  },
  login: {
    color: "#11c986",
  },
  alreadyHaveAnContainer: {
    left: 94,
  },
  orSignupWith: {
    marginLeft: 16,
    fontFamily: FontFamily.latoRegular,
    lineHeight: 21,
    color: Color.primaryGrey2,
    textAlign: "center",
    fontSize: FontSize.size_base,
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
    borderRadius: Border.br_7xs,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    overflow: "hidden",
    flex: 1,
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
    color: Color.white,
    lineHeight: 21,
    fontFamily: FontFamily.latoBold,
    fontSize: FontSize.size_base,
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  formChild: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.primaryGrey2,
    top: "34.52%",
    height: "65.48%",
  },
  userName1: {
    width: "77.38%",
    top: "51.19%",
    left: "5.95%",
    color: Color.sthLightgrey,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
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
    position: "absolute",
  },
  formParent: {
    top: 182,
  },
  signup2: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    textAlign: "left",
    color: Color.white,
  },
  btn3: {
    top: 604,
    backgroundColor: Color.mediumseagreen_100,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: Border.br_7xs,
    width: 336,
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
  signup: {
    left: 1306,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(65, 81, 104, 0.8)",
    backgroundColor: Color.sthDark,
    width: 414,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    top: 121,
  },
  loginsignupItem: {
    left: 360,
    width: 1078,
    height: 589,
    top: 0,
    position: "absolute",
  },
  loginsignupInner: {
    top: 346,
    left: 1006,
    width: 1077,
    height: 904,
    position: "absolute",
  },
  ellipseIcon: {
    width: 821,
    height: 759,
    top: 0,
    left: 0,
    position: "absolute",
  },
  wwwinstagramcomuxuiUnivers: {
    fontSize: 21,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    textAlign: "left",
    color: Color.white,
  },
  wwwinstagramcomuxuiUniversWrapper: {
    top: 1171,
    left: 861,
    flexDirection: "row",
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
    elevation: 80,
    shadowRadius: 80,
    shadowColor: "rgba(56, 49, 4, 0.07)",
    borderRadius: Border.br_6xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    position: "absolute",
  },
  listingParent: {
    top: 140,
    left: 144,
    width: 963,
    height: 720,
    position: "absolute",
  },
  bgChild: {
    top: 897,
    left: 414,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    height: 896,
    width: 414,
    borderRadius: Border.br_11xl,
    backgroundColor: "transparent",
  },
  h11: {
    top: 744,
    left: 247,
    paddingHorizontal: 0,
    paddingVertical: 2,
    flexDirection: "row",
  },
  form4: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  form5: {
    top: 99,
    left: 0,
    position: "absolute",
  },
  forgotPassword: {
    left: 223,
    textDecoration: "underline",
    top: 198,
    position: "absolute",
  },
  radioButtonChild: {
    backgroundColor: Color.sthLightgrey,
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
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
  },
  formGroup: {
    top: 647,
    height: 222,
  },
  btn4: {
    top: 390,
    backgroundColor: Color.mediumseagreen_100,
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
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    overflow: "hidden",
  },
  bg3: {
    height: 471,
    top: 896,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    left: 414,
    width: 414,
    backgroundColor: "transparent",
  },
  signup3: {
    color: Color.mediumseagreen_100,
  },
  dontHaveAnContainer: {
    left: 96,
  },
  btn5: {
    backgroundColor: Color.sthDarkgrey,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: Border.br_7xs,
    flex: 1,
  },
  frameGroup: {
    top: 595,
  },
  login1: {
    top: 194,
    left: 842,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(65, 81, 104, 0.8)",
    backgroundColor: Color.sthDark,
    width: 414,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
  },
  groupChild: {
    height: "89.19%",
    width: "22.79%",
    right: "77.21%",
    bottom: "10.81%",
    left: "0%",
    top: "0%",
    maxWidth: "100%",
  },
  red1: {
    color: Color.mediumseagreen_100,
  },
  red: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  realEstate: {
    fontSize: 20,
    letterSpacing: 10,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  bricksRealEstate: {
    color: Color.white,
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
  bg5: {
    height: 471,
    top: 896,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    left: 414,
    width: 414,
    backgroundColor: "transparent",
  },
  splash: {
    left: 378,
    shadowOpacity: 1,
    shadowOffset: {
      width: 20,
      height: 40,
    },
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(65, 81, 104, 0.8)",
    backgroundColor: Color.sthDark,
    width: 414,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    top: 121,
  },
  loginsignup: {
    height: 1250,
    backgroundColor: "transparent",
    width: "100%",
    flex: 1,
    overflow: "hidden",
  },
});

export default LoginSignup;
