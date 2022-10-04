import React, { useEffect, useRef, useState } from "react";
import i18n from "../Config/i18n";
import { StyleSheet, View } from "react-native";
import { colors } from "../Styles/Colors";
import CustomError from "../Components/CustomError";
import CustomButton from "../Components/CustomButton";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [error, setError] = useState(null);

  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/sound/beep.mp3') );
    setSound(sound);

    console.log('Playing Sound');
    await Sound.playAsync(sound);
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    playSound();
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  // if (hasPermission === null) {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.panel}>
  //         <CustomError
  //           title={i18n.t("title.error")}
  //           text={i18n.t("message.camera.permission")}
  //         />
  //       </View>
  //     </View>
  //   );
  // }
  // if (hasPermission === false) {

  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.panel}>
  //         <CustomError
  //           title={i18n.t("title.error")}
  //           text={i18n.t("message.camera.noAccess")}
  //         />
  //       </View>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        {!error ? (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFill}
          />
        ) : (
          <CustomError title={i18n.t("title.error")} text={error} />
        )}
      </View>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 90,
    backgroundColor: colors.background,
  },

  panel: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  field: {
    marginBottom: 15,
  },
});
