import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// Screeens

import LoginScreen from "../Screens/LoginScreen";
import RegistroScreen from "../Screens/RegistroScreen";
import CuentaScreen from "../Screens/CuentaScreen";
import HistorialScreen from "../Screens/HistorialScreen";
import InformacionScreen from "../Screens/InformacionScreen";
import WelcomeScreen from "../Screens/WelcomeScreen";
import { Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="WelcomeStack">
      <Stack.Screen name="WelcomeStack" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginStack" component={LoginScreen} options={{
        headerTitle: "Iniciar Sesión",
        headerTitleStyle: { color: "#0f5e5dff", }, headerTitleAlign: "center",
      }} />
      <Stack.Screen name="RegistroStack" component={RegistroScreen} options={{
        headerTitle: "Registro  ",

        headerTitleStyle: { color: "#0f5e5dff", }
      }} />
      <Stack.Screen name="CuentaStack" component={CuentaScreen} options={{
        headerTitle: "Usuario ",headerTitle: "Cristhian Reyes",
        headerTitleStyle: { color: "#0f5e5dff", }, headerTitleAlign: "center",
      }}/>
      <Stack.Screen name="HistorialStack" component={HistorialScreen } options={{
        headerTitle: "Historial", headerTitleStyle: { color: "#0f5e5dff", }, headerTitleAlign: "center", }} />
      <Stack.Screen name="InformacionStack" component={InformacionScreen} options={{ 
          headerTitle: "Empleados", headerTitleStyle: { color: "#0f5e5dff"}}}/>
    </Stack.Navigator>
  );
}
export default function StackNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
