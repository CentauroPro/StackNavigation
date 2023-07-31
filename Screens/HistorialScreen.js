import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";
import { Table, Row, Rows,  } from "react-native-table-component";
import empleadosJSON from "../assets/data/empleados.json";

export default function HistorialScreen({ navigation }) {
  function cuenta() {
    navigation.navigate("CuentaStack");
  }
  const datos = empleadosJSON;
  const tableData = datos.ventas.map((item) => [
    item.fecha,
    item.cliente,
    item.auto,
    item.precio,
    item.vendedor,
  ]);

  const tableHead = ["Fecha", "Cliente", "Auto", "Precio", "Vendedor"];

  return (
    <ImageBackground
      style={[styles.container, { opacity: 0.9}]}
      source={require("../assets/images/F3.jpg")}>
    
      <View style={styles.conta} />

      <View style={styles.container}>
        <Text>Lista de Ventas</Text>
        <Table borderStyle={{ borderWidth: 1, borderColor: "#0c2e03" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} style={styles.row} textStyle={styles.text} />
        </Table>
     
      </View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
     padding: 16,
      paddingTop: 30, 
      backgroundColor: "rgba(229, 226, 226, 0.662)",
    
     },

  head: { 
    height: 40, 
    backgroundColor: "#4579ac",
    
   },
     
  text: {
    margin: 6,
  },
  row: {
     height: 30
     },
});
