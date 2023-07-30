import { View, Text, StyleSheet, Image,Button,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CuentaScreen({ navigation }) {

  function historial() {
    navigation.navigate('HistorialStack')
  }
  function navegar() {
    navigation.navigate('InformacionStack')
  }
  return (
    <ImageBackground style={[styles.container,{opacity:0.9}]}
    source={require("../assets/images/F3.jpg")}>
      <View style={styles.conta}/>


      <View style={styles.contaner1}>

        <Image
          style={{
            height: 90,
            width: 90, borderRadius: 400 / 2,opacity:1.1,backgroundColor:"rgba(163, 222, 152, 1)",marginBottom:300,
          }}
          source={require('../assets/images/24193497.jpg')} />
      </View >
      <View style={styles.conte2} >
    
        <TouchableOpacity  >

          <Text style={{ color: '#f0e8e8', fontSize: 20 }}><Button title=' Historial'
            color={'#2222223f'} onPress={() => historial('HistorialStack')}/></Text>
          <Text></Text>
          <Image source={require('../assets/images/12.png')}
            style={[styles.ima1 ,{borderRadius:400/2}]}   />
            


            
          
  
        </TouchableOpacity>


        <TouchableOpacity  >

          <Text style={{ color: '#f0e8e8', fontSize: 20 }} ><Button title=' Información'
            color={'#4343433f'} onPress={() => navegar('InformacionStack')}/> </Text>
          <Image source={require('../assets/images/images.png')}
            style={[styles.ima,{borderRadius:400/2} ] } />
        </TouchableOpacity>
      </View>



    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.86)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },

  contaner1: {
    
    borderRadius: 400 / 2,
    borderColor: '#666',
    marginBottom:100


  },
  conte2: {
    flexDirection: "row",
    
    width:200


  },
  ima: {
    width: 80,
    height: 80
  },
  ima1: {
    width: 80,
    height: 80
  },
  

  txt: {
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",

  }
});