import { View, Text,StyleSheet, ImageBackground,TextInput,Button  } from 'react-native'
import React from 'react'

export default function RegistroScreen({navigation}) {
  function navegar() {
    navigation.navigate('LoginStack')
  }
  return (

<ImageBackground style={[styles.container,{opacity:0.9}]}
source={require("../assets/images/F3.jpg")}>
  <View style={styles.conta}>
  <View>
      <Text style={styles.txt}>Numero de Documuento</Text>
      <TextInput placeholder="Ingrese Usuario" style={styles.input} placeholderTextColor={"white"} />
      <Text style={styles.txt}>Ingrese su Correo </Text>
      <TextInput placeholder="Ingrese Usuario" style={styles.input} placeholderTextColor={"white"}/>
      <Text style={styles.txt}> Ingrese su Edad</Text>
      <TextInput placeholder="Ingrese Usuario" style={styles.input} placeholderTextColor={"white"}/>
      <Text style={styles.txt}> Ingrese su Contaseña</Text>
      <TextInput placeholder="Ingrese Usuario" style={styles.input} placeholderTextColor={"white"}/>
      <View>
        
      </View>
      <Button title=' Registrarse '
          color={'#3fd2e93f'}
            onPress={() => navegar('LoginStack')}
          />
    </View>
  </View>



</ImageBackground>




  )
}
const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "rgba(133, 183, 204, 0.448)",
    width: '30%',
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 25,
    textAlign: "center",
    borderEndWidth: 5,
    marginBottom: 20,
    fontSize: 15

  },

  txt:{
    fontSize: 25,
    textAlign: "center",
    color: "#f2e8e8",
  },
  conta: {
    borderWidth: 1,
    backgroundColor: "rgba(66, 56, 56, 0.296)",
    marginBottom: 20,
    height: '60%',
    width: 299,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: '#666'

  },
});
