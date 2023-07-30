import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import empleadosJSON from "../assets/data/empleados.json";

export default function InformacionScreen({ navigation }) {
  function login() {
    navigation.navigate("LoginStack");
  }
  const datos = empleadosJSON;
  const sectiones = [
    {
      title: "Información Personal de Empleados",
      data: datos.ventas,
    },
  ];
  return (
    <ImageBackground
      style={[styles.container, { opacity: 0.9 }]}
      source={require("../assets/images/F3.jpg")}>
    
          <View >

<Button title=' Inicio'
color={'#f5f5f53f'}
  onPress={()=>login('LoginStack')}
/>
 <Text></Text>
</View>
      <View style={styles.conta} />

      <View style={styles.container}>
        <SectionList
          sections={sectiones}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.btn}>
                <Image source={{ uri: item.imagen }} style={styles.ima} />
                <Text style={{ fontSize: 20 }}>{item.vendedor}</Text>
                <Text style={{ fontSize: 15 }}>{item.telefono}</Text>
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.txtHeader}>
              <Text style={styles.txtSeccion}>{section.title}</Text>
            </View>
          )}
        />
      </View>
      
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "rgba(66, 56, 56, 0.296)",
  },

  ima: {
    height: 80,
    width: 90,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
  },
  txtHeader: {
    backgroundColor: "#b8ceab",
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 30,
  },
});
