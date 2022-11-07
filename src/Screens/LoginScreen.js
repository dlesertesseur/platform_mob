import React, { useEffect, useRef } from "react";
import i18n from "../Config/i18n";
import CustomTextInput from "../Components/CustomTextInput";
import CustomButton from "../Components/CustomButton";
import CustomLabel from "../Components/CustomLabel";
import CustomImage from "../Components/CustomImage";
import CustomLink from "../Components/CustomLink";
import { useForm } from "react-hook-form";
import { ImageBackground, StyleSheet, View } from "react-native";
import { colors } from "../Styles/Colors";

const LoginScreen = ({ navigation }) => {
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

  const onSubmit = (data) => {
    console.log(data);
    
  };

  const focusRef = useRef(null);

  const onSingIn = () => {
    navigation.navigate("SignUp");
  };

  useEffect(() => {
    if (focusRef) {
      focusRef.current?.focus();
    }
  }, []);

  const backImg = null; //require("../../assets/images/background.jpg");
  const logo = require("../../assets/images/logo.png");

  return (
    <View style={styles.container}>
      <ImageBackground source={backImg} resizeMode="cover" style={styles.image}>
        <CustomImage source={logo} style={styles.logo} />

        <CustomLabel
          title={i18n.t("title.screen.login")}
          text={i18n.t("title.screen.login-desc")}
          fontSize={30}
          color={colors.primary}
          style={styles.fieldLabel}
        />

        <View style={styles.panel}>
          <CustomTextInput
            style={styles.field}
            control={control}
            name="email"
            placeholder={i18n.t("label.email")}
            rules={{
              required: i18n.t("validation.required"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: i18n.t("validation.email.invalid"),
              },
            }}
            //focusRef={focusRef}
          />

          <CustomTextInput
            control={control}
            name="password"
            placeholder={i18n.t("label.password")}
            rules={{
              required: i18n.t("validation.required"),
              minLength: {
                value: 8,
                message: i18n.t("validation.password.minLength"),
              },
            }}
            password={true}
          />

          <CustomLink
            text={i18n.t("label.forgotPassword")}
            style={styles.forgotPassword}
          />
          <CustomButton
            text={i18n.t("button.login")}
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        <CustomLink
          text={i18n.t("label.notAccount")}
          style={styles.signup}
          onPress={onSingIn}
        />
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  field: {
    marginBottom: 15,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  logo: {
    marginTop: 64,
    marginBottom: 30,
  },

  panel: {
    // borderRadius: 12,
    // backgroundColor: colors.secondary,
    padding: 15,
    margin: 15,
  },

  forgotPassword: {
    height: 40,
    alignItems: "flex-end",
    marginBottom: 30,
    color: colors.secondary,
  },

  signup: {
    height: 40,
    alignItems: "center",
  },

  fieldLabel: {
    padding: 15,
  },
});
