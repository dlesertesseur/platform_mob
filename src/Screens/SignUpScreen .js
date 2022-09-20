import React, { useState, useRef } from "react";
import I18n from "../Config/i18n";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import CustomTextInput from "../Components/CustomTextInput";
import { colors } from "../Styles/Colors";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  //const [btBackToLoginVisble, setBtBackToLoginVisble] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const focusRef = useRef(null);

  // useEffect(() => {
  //   focusRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   if (error.trim() != "") {
  //     setLoginError(getErrorMessage(error));
  //     //setBtBackToLoginVisble(error === "EMAIL_EXISTS");
  //   }
  // }, [error]);

  const onLogin = () => {
    navigation.navigate("Login");
  };

  const onSignUp = () => {
    // const validateEmail = schemaEmail.validate({ email: email });
    // const validatePassword = schemaPassword.validate({ password: password });
    // if (validateEmail.error) {
    //   setEmailError(validateEmail.error.message);
    // } else {
    //   setEmailError("");
    //   if (validatePassword.error) {
    //     setPasswordError(validatePassword.error.message);
    //   } else {
    //     setPasswordError("");
    //     if (password === confirmPassword) {
    //       dispatch(signUp({ email: email, password: password }));
    //       dispatch(resetLocationData());
    //     } else {
    //       setPasswordConfirmError(stringTable.CONFIRM_PASSWORD_ERROR);
    //     }
    //   }
    // }
  };

  return (
    <View style={styles.container}>
      {/* <CustomTextInput
        label={I18n.t("label.email")}
        value={email}
        setValue={setEmail}
        error={emailError}
        focusRef={focusRef}
      />
      <CustomTextInput
        label={I18n.t("label.password")}
        password={true}
        value={password}
        setValue={setPassword}
        error={passwordError}
      />
      <CustomTextInput
        label={I18n.t("label.confirmPassword")}
        password={true}
        value={confirmPassword}
        setValue={setConfirmPassword}
        error={passwordConfirmError}
      />

      <TouchableOpacity style={styles.btSignUp} onPress={onSignUp}>
        <Text style={styles.btLoingText}> {I18n.t("button.signup")} </Text>
        {loading ? (
          <ActivityIndicator
            style={styles.indicator}
            size="small"
            color={colors.textInputBack}
          />
        ) : (
          <></>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.btText} onPress={onLogin}>
        <Text style={styles.text}> {I18n.t("button.alreadyHaveUser")} </Text>
      </TouchableOpacity> */}

      {/* {loginError ? <Text style={styles.textError}>{loginError}</Text> : <></>} */}

    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.authScreensBack,
    padding: 10,
  },

  btText: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  text: {
    fontSize: 18,
    color: colors.textInputColor,
    fontWeight: "bold",
  },

  btSignUp: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.textInputColor,
    marginBottom: 15,
  },

  btBack: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.textInputColor,
    marginBottom: 15,
  },

  btLoingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textInputBack,
  },

  indicator: {
    marginHorizontal: 5,
  },

  textError: {
    color: colors.error,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
