import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }) {
  function cuenta() {
    navigation.navigate('CuentaStack')
  }
  function registro() {
    navigation.navigate('RegistroStack')
  }

  return (


   
    <ImageBackground
    
      style={[styles.container, { opacity: 1.1 }]}
      source={require("../assets/images/F3.jpg")}>
      <View>
        <Text style={styles.text}>R-C </Text>
      </View>

      <View style={styles.conta}>
        <Text style={styles.txt} >Numero de Documento</Text>
        <TextInput placeholder="Ingrese Usuario" style={styles.input} placeholderTextColor={"white"} />
        <Text style={styles.txt} >Ingrese Contaseña</Text>
        <TextInput placeholder="Ingrese Contraseña" style={styles.input1} placeholderTextColor={"white"} />
        <Text></Text>


        <View style={styles.container}>

          <Button title=' Iniciar Sesión'
          color={'#3fd2e93f'}
            onPress={()=>cuenta('CuentaStack')}
          />
           <Text></Text>
        </View>
       
        <Text style={{ color: "#999", fontSize: 15 }}>
          ¿Olvidaste tu Contaseña?
        </Text>
        <Text style={{ color: "#999", fontSize: 15 }} onPress={() => registro('RegistroStack')}> Registrate </Text>
        <Text style={{ color: "#999", fontSize: 15 }}>
          Actualiza tus Datos
        </Text>
      </View>
      <View>
      <StatusBar style="auto"  backgroundColor={'#010b0bad'}/>
      </View>
    </ImageBackground>
    





  );
}
const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  conta: {
    borderWidth: 1,
    backgroundColor: "rgba(66, 56, 56, 0.296)",
    marginBottom: 20,
    height: 300,
    width: 299,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: '#666'

  },
  txt:{
    fontSize: 25,
    textAlign: "center",
    color: "#f2e8e8",
  },
  text: {
    fontSize: 38,
    textAlign: "center",
    color: "#f2e8e8",
    marginBottom: 100,
  },
  input: {
    backgroundColor: "rgba(133, 183, 204, 0.448)",
    width: "85%",
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 25,
    textAlign: "center",
    borderEndWidth: 5,
    marginBottom: 20,
    fontSize: 15

  },
  input1: {
    backgroundColor: "rgba(133, 183, 204, 0.448)",
    width: "85%",
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 25,
    textAlign: "center",
    borderEndWidth: 4,
    marginBottom: 20,
    fontSize: 15
  },
  btningreasr: {
    backgroundColor: "#799aa2de",
    height: 30,
    width: 120,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  ima: {
    height: 100,
    width: 100,
    marginBottom: 30,
  },
  ima1: {
    height: 100,
    width: 100,
  },
});
