
import 'react-native-gesture-handler';

import { StyleSheet, Text, View,ImageBackground, Button  } from 'react-native';
import StackNavigation from './Navegadores/StackNavigator';



export default function App({}) {

  return (
    <StackNavigation/>

   

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor:'#d5b66a',
   
  }
});