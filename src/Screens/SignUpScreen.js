import i18n from "../Config/i18n";
import CustomTextInput from "../Components/CustomTextInput";
import CustomButton from "../Components/CustomButton";
import CustomLabel from "../Components/CustomLabel";
import CustomImage from "../Components/CustomImage";
import HorizontalSeparator from "../Components/HorizontalSeparator";
import CustomAvatar from "../Components/CustomAvatar";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ImageBackground, StyleSheet, View } from "react-native";
import { colors } from "../Styles/Colors";
import { useState } from "react";
import { useSelector } from "react-redux";

const SignUpScreen = ({ navigation }) => {

  const { user } = useSelector((state) => state.auth.value);

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
  const [picture, setPicture] = useState("");
  const onSingIn = () => {
    //navigation.navigate("SignUp");
  };

  useEffect(() => {
    console.log(JSON.stringify(user));
    setPicture(user.photo);
  }, [user]);

  const backImg = null;
  const logo = require("../../assets/images/logo.png");

  const onTakePhoto = () => {
    navigation.navigate("TakePhoto");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backImg} resizeMode="cover" style={styles.image}>
        <CustomImage source={logo} style={styles.logo} />

        <HorizontalSeparator />
        <CustomLabel
          title={i18n.t("title.screen.signUp")}
          text={i18n.t("title.screen.signUp-desc")}
          fontSize={30}
          color={colors.primary}
        />

        <HorizontalSeparator height={30} />
        <CustomAvatar size={128} onPress={onTakePhoto} image={picture}/>
        <HorizontalSeparator height={30} />

        <View style={styles.panel}>
          <CustomTextInput
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
          />
          <HorizontalSeparator />
          <CustomTextInput
            control={control}
            name="firstName"
            placeholder={i18n.t("label.firstName")}
            rules={{
              required: i18n.t("validation.required"),
            }}
          />
          <HorizontalSeparator />
          <CustomTextInput
            control={control}
            name="lastName"
            placeholder={i18n.t("label.lastName")}
            rules={{
              required: i18n.t("validation.required"),
            }}
          />
          <HorizontalSeparator height={30} />
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

  image: {
    width: "100%",
    height: "100%",
  },

  panel: {
    marginHorizontal: 15,
  },

  logo: {
    marginTop: 64,
    marginBottom: 30,
  },
});
