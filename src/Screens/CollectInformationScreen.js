import React from "react";
import i18n from "../Config/i18n";
import CustomButton from "../Components/CustomButton";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Styles/Colors";
import { useForm } from "react-hook-form";

const CollectInformationScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onScan = () => {
    navigation.navigate("scanScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <CustomButton text={i18n.t("button.scan")} onPress={onScan} />
      </View>
    </View>
  );
};

export default CollectInformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  panel: {
    borderRadius: 12,
    backgroundColor: colors.secondary,
    padding: 15,
    margin: 15,
  },

  field: {
    marginBottom: 15,
  },
});
