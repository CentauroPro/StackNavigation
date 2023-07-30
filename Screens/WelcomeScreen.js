import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={[styles.container, { opacity: 1.1 }]}
      source={require("../assets/images/F1.jpg")}
    >
      <View style={styles.conte}>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={{ color: "#633232", fontSize: 60 }}>Bienvenidos</Text>
        <Text style={styles.txt}></Text>

        <TouchableOpacity style={styles.cont1}>
          <Button
            title="Rey-Card"
            color={"#170303"}
            onPress={() => navigation.navigate("LoginStack")}
            style={[styles.btn, { borderRadius: 60 }]}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={styles.imag}
          source={require("../assets/images/f2.jpg")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c29898 ",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 850,
    width: 359,
  },
  conte: {
    marginBottom: 110,
  },

  cont1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  txt: {
    fontSize: 90,
    color: "#bf06065c",
  },
  imag: {
    height: 305,
    width: 660,
  },
});
