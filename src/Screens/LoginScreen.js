import React, { useState, useRef, useEffect } from "react";
import I18n from "../Config/i18n";
import { useForm, Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { colors } from "../Styles/Colors";
import { TextInput } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  //const focusRef = useRef(null);

  const onLogin = () => {
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
    //   }
    // }
  };

  const onSingIn = () => {
    navigation.navigate("SignUp");
  };

  // useEffect(() => {
  //   focusRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   if(error.trim() != ""){
  //     setLoginError(getErrorMessage(error));
  //     console.log("LoginScreen::useEffect("+error+")");
  //   }
  //   else{
  //     setLoginError("");
  //   }
  // }, [error]);

  return (
      <View style={styles.container}>
        {/* <CustomTextInput
          label={I18n.t("label.email")}
          value={email}
          setValue={setEmail}
          error={emailError}
          focusRef={focusRef}
        /> */}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputText}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={I18n.t("label.email")}
            />
          )}
          name="email"
        />
        {errors.email && <Text>{I18n.t("validation.required")}</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputText}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={I18n.t("label.password")}
            />
          )}
          name="password"
        />
        {errors.password && <Text>{I18n.t("validation.required")}</Text>}

        <TouchableOpacity style={styles.btLogin} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.btLoginText}> {I18n.t("button.login")} </Text>
        </TouchableOpacity>

        {/* {loginError ? <Text style={styles.textError}>{loginError}</Text> : <></>} */}

        <TouchableOpacity style={styles.btText} onPress={onSingIn}>
          <Text style={styles.text}> {I18n.t("button.signup")} </Text>
        </TouchableOpacity>
      </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryLighter,
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

  btLogin: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 6,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.textInputColor,
    marginBottom: 15,
  },

  btLoginText: {
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
  },

  inputText: {
    width: "100%",
    height: 40,
    borderRadius: 6,
    backgroundColor: colors.textInputBack,
    padding: 10,
    color: "black",
    fontSize: 18,
    //fontWeight: "bold",
  },
});
