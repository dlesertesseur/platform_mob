import i18n from "../Config/i18n";
import CustomTextInput from "../Components/CustomTextInput";
import CustomButton from "../Components/CustomButton";
import CustomLabel from "../Components/CustomLabel";
import CustomImage from "../Components/CustomImage";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ImageBackground, StyleSheet, View } from "react-native";
import { colors } from "../Styles/Colors";

const SignUpScreen = ({ navigation }) => {
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

  const focusRef = useRef(null);

  const onSingIn = () => {
    //navigation.navigate("SignUp");
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
          style={styles.fieldLabel}
          title={i18n.t("title.screen.signUp")}
          text={i18n.t("title.screen.signUp-desc")}
          fontSize={30}
          color={colors.primary}
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
            style={styles.field}
            control={control}
            name="firstName"
            placeholder={i18n.t("label.firstName")}
            rules={{
              required: i18n.t("validation.required"),
            }}
          />

          <CustomTextInput
            style={styles.fieldButton}
            control={control}
            name="lastName"
            placeholder={i18n.t("label.lastName")}
            rules={{
              required: i18n.t("validation.required"),
            }}
          />

          <CustomButton
            text={i18n.t("button.signUp")}
            onPress={handleSubmit(onSubmit)}
          />
        </View>

      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  field: {
    marginBottom: 15,
  },

  fieldButton: {
    marginBottom: 30,
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

  fieldLabel: {
    padding: 15,
  },
});
